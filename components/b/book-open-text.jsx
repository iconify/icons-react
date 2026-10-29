import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6s3hbb-h.css';
import '../../css/g/glfrjmbso.css';
import '../../css/n/nfrqrqvut.css';
import '../../css/q/qjfvy0gpv.css';
import '../../css/m/m20w_d93t.css';
import '../../css/i/izu19ybtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6s3hbb-h wm-k"/><path class="glfrjmbso wm-k"/><path class="nfrqrqvut wm-k"/><path class="qjfvy0gpv wm-k"/><path class="m20w_d93t wm-shine"/><path class="izu19ybtn wm-a"/></g>`,
		"fallback": "withicons-anime:book-open-text",
	});
}

export default Component;
