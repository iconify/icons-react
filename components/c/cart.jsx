import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/psxi2obbs.css';
import '../../css/j/j5uiswbmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="psxi2obbs"/><path class="j5uiswbmp"/></g>`,
		"fallback": "iconoir:cart",
	});
}

export default Component;
