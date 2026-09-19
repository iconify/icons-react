import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j01_ov-ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j01_ov-ho"/>`,
		"fallback": "cbi:bulb-group-classic-3-alt",
	});
}

export default Component;
