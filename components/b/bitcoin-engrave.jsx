import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/se42xybiv.css';
import '../../css/f/fksg71bpx.css';
import '../../css/t/t0spev3hn.css';
import '../../css/d/dfr8kabwp.css';
import '../../css/o/omdwggbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="se42xybiv wm-k"/><path class="fksg71bpx wm-a"/><path class="t0spev3hn wm-shadow"/><path class="dfr8kabwp wm-k"/><path class="omdwggbcq wm-a"/></g>`,
		"fallback": "withicons:bitcoin-engrave",
	});
}

export default Component;
