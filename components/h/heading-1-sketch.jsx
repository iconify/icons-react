import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dk_3_ehmm.css';
import '../../css/p/pjlbnhb5m.css';
import '../../css/i/isddsmbki.css';
import '../../css/c/c763fsb7r.css';
import '../../css/r/rrjphnixu.css';
import '../../css/k/ks7m_ibcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dk_3_ehmm wm-k"/><path class="pjlbnhb5m wm-a"/><path class="isddsmbki wm-s"/><path class="c763fsb7r wm-k"/><path class="rrjphnixu wm-a"/><path class="ks7m_ibcp wm-s"/></g>`,
		"fallback": "withicons:heading-1-sketch",
	});
}

export default Component;
