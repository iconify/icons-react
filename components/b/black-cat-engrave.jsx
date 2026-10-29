import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eb3udlcqj.css';
import '../../css/g/gq5aybb5j.css';
import '../../css/q/qg-00dxjb.css';
import '../../css/w/w0f6d_bws.css';
import '../../css/w/w27peibbj.css';
import '../../css/i/ivddysb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="eb3udlcqj wm-k"/><path class="gq5aybb5j wm-a"/><path class="qg-00dxjb wm-shadow"/><path class="w0f6d_bws wm-k"/><path class="w27peibbj wm-a"/><path class="ivddysb5x wm-k"/></g>`,
		"fallback": "withicons:black-cat-engrave",
	});
}

export default Component;
