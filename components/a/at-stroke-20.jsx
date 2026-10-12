import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4bzp0bth.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4bzp0bth"/>`,
		"fallback": "garden:at-stroke-20",
	});
}

export default Component;
