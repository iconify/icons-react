import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pd704t0yf.css';
import '../../css/b/bau48wbma.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/n/naactqb7v.css';
import '../../css/r/rxp23_3og.css';
import '../../css/b/bnw9o7z0h.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pd704t0yf wm-k"/><path class="bau48wbma wm-a"/><path class="ol-kpp5cg wm-s"/><path class="naactqb7v wm-shadow"/><path class="rxp23_3og wm-k"/><path class="bnw9o7z0h wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:bug-off-engrave",
	});
}

export default Component;
