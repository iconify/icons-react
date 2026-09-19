import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dwlr4pzjv.css';
import '../../css/a/a2_ly7b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dwlr4pzjv"/><path class="a2_ly7b_n"/></g>`,
		"fallback": "iconoir:home-temperature-in",
	});
}

export default Component;
