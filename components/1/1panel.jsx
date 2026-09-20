import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcz76q0_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcz76q0_s"/>`,
		"fallback": "thesvg:1panel",
	});
}

export default Component;
