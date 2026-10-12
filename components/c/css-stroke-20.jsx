import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl9mpu3fh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl9mpu3fh"/>`,
		"fallback": "garden:css-stroke-20",
	});
}

export default Component;
