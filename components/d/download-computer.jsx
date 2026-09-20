import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztg319kwr.css';
import '../../css/w/wmsczlcro.css';
import '../../css/v/v-wfa-bny.css';
import '../../css/j/jxv6qwben.css';
import '../../css/l/ldl3u4bno.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ztg319kwr"/><path class="wmsczlcro"/><path class="v-wfa-bny"/><path class="jxv6qwben"/><path class="ldl3u4bno"/></g>`,
		"fallback": "streamline-color:download-computer",
	});
}

export default Component;
