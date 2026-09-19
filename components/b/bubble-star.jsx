import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ijd_khbrd.css';
import '../../css/b/bx75ttivl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ijd_khbrd"/><path class="bx75ttivl"/></g>`,
		"fallback": "iconoir:bubble-star",
	});
}

export default Component;
