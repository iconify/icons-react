import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a0tu6zjre.css';
import '../../css/d/d3p2npepl.css';
import '../../css/u/uahprbbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a0tu6zjre"/><path class="d3p2npepl"/><path class="uahprbbwf"/></g>`,
		"fallback": "hugeicons:gymnastic",
	});
}

export default Component;
