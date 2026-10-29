import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ooav_l3zk.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/c/cl8daubuk.css';
import '../../css/q/qvra2koks.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ooav_l3zk wm-k"/><path class="ol-kpp5cg wm-s"/><path class="cl8daubuk wm-shadow"/><path class="qvra2koks wm-k"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:heart-off-engrave",
	});
}

export default Component;
