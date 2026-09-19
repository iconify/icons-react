import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iy1noznvg.css';
import '../../css/b/blbuf7bkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iy1noznvg"/><path class="blbuf7bkj"/></g>`,
		"fallback": "iconoir:bed-ready",
	});
}

export default Component;
