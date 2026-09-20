import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvymobzlx.css';
import '../../css/z/zb6-pfbbp.css';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG28L0ccsA" class="rvymobzlx"/><path id="SVGNbdoyehr" class="zb6-pfbbp"/></defs><g class="hntgybcog"><use href="#SVG28L0ccsA"/><use href="#SVGNbdoyehr"/><use href="#SVG28L0ccsA"/><use href="#SVGNbdoyehr"/></g>`,
		"fallback": "reicon:bookmark5",
	});
}

export default Component;
