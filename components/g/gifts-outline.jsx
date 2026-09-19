import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx831zb_d.css';
import '../../css/y/yy94u4n_o.css';
import '../../css/q/qc84pjfnr.css';
import '../../css/p/patgbmbdg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yx831zb_d"/><path clip-rule="evenodd" class="yy94u4n_o"/><path class="qc84pjfnr"/><path clip-rule="evenodd" class="patgbmbdg"/></g>`,
		"fallback": "glyphs:gifts-outline",
	});
}

export default Component;
