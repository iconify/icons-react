import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/c03ka53pv.css';
import '../../css/v/vsrxpre8m.css';
import '../../css/c/cegerabtm.css';
import '../../css/f/fp98cjbpx.css';
import '../../css/z/zr97ach-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="c03ka53pv"/><path class="vsrxpre8m"/><path class="cegerabtm"/><path class="fp98cjbpx"/><path class="zr97ach-s"/></g>`,
		"fallback": "icon-park:chicken-zodiac",
	});
}

export default Component;
