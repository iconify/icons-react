import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv3wz35gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv3wz35gf"/>`,
		"fallback": "mdi:axis-x-y-arrow-lock",
	});
}

export default Component;
