import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxhoadckv.css';
import '../../css/d/dwlr4pzjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yxhoadckv"/><path class="dwlr4pzjv"/></g>`,
		"fallback": "iconoir:home-secure",
	});
}

export default Component;
