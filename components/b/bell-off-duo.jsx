import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kxhfa_bfi.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/kjmig_qpk.css';
import '../../css/h/hnamav36t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kxhfa_bfi"/><path class="qr4ochb5c wm-s"/><path class="kjmig_qpk"/><path class="hnamav36t wm-a"/></g>`,
		"fallback": "withicons:bell-off-duo",
	});
}

export default Component;
