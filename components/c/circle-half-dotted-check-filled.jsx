import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4mui1gbl.css';
import '../../css/o/o5w1ctb2x.css';
import '../../css/d/d1s63ybjv.css';
import '../../css/v/vwp_5z6gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z4mui1gbl"/><path class="o5w1ctb2x"/><circle class="d1s63ybjv"/><path class="vwp_5z6gf"/></g>`,
		"fallback": "reicon:circle-half-dotted-check-filled",
	});
}

export default Component;
