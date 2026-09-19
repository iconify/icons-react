import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zhms9dvjt.css';
import '../../css/r/rpt1xmbzs.css';
import '../../css/l/li-7n8b6p.css';
import '../../css/r/r4nx58bsc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zhms9dvjt"/><path clip-rule="evenodd" class="rpt1xmbzs"/><path class="li-7n8b6p"/><path clip-rule="evenodd" class="r4nx58bsc"/></g>`,
		"fallback": "glyphs:box-layout-2-duo",
	});
}

export default Component;
