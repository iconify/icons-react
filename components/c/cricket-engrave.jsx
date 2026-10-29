import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u6co3bc3l.css';
import '../../css/u/usvv9bqzp.css';
import '../../css/b/b2j8s_bbd.css';
import '../../css/j/jjivkrbpv.css';
import '../../css/x/xcez03_th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u6co3bc3l wm-k"/><path class="usvv9bqzp wm-a"/><path class="b2j8s_bbd wm-shadow"/><path class="jjivkrbpv wm-k"/><path class="wm-a xcez03_th"/></g>`,
		"fallback": "withicons:cricket-engrave",
	});
}

export default Component;
