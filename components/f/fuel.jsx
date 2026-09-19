import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z-bhm1lee.css';
import '../../css/h/hdfqadb5g.css';
import '../../css/k/ki_mm7b7w.css';
import '../../css/r/rohj23bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z-bhm1lee"/><path class="hdfqadb5g"/><path class="ki_mm7b7w"/><path class="rohj23bqn"/></g>`,
		"fallback": "hugeicons:fuel",
	});
}

export default Component;
