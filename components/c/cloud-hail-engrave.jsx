import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u_jv868wi.css';
import '../../css/o/oui4sebxw.css';
import '../../css/j/j44_jlbcg.css';
import '../../css/l/lhr7mp78x.css';
import '../../css/d/df_konclx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u_jv868wi wm-k"/><path class="oui4sebxw wm-a"/><path class="j44_jlbcg wm-shadow"/><path class="lhr7mp78x wm-k"/><path class="df_konclx wm-a"/></g>`,
		"fallback": "withicons:cloud-hail-engrave",
	});
}

export default Component;
