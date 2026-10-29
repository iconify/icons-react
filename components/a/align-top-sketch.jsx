import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bvyhanbhw.css';
import '../../css/g/gk6fuqrcf.css';
import '../../css/q/qpnl1sbkh.css';
import '../../css/q/q2pcxvj8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bvyhanbhw"/><path class="gk6fuqrcf wm-k"/><path class="qpnl1sbkh wm-k"/><path class="q2pcxvj8p wm-a"/></g>`,
		"fallback": "withicons:align-top-sketch",
	});
}

export default Component;
