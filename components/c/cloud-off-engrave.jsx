import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ctxblysyk.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/u/ugrmfyzgf.css';
import '../../css/s/shi8u7lan.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ctxblysyk wm-k"/><path class="ol-kpp5cg wm-s"/><path class="ugrmfyzgf wm-shadow"/><path class="shi8u7lan wm-k"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:cloud-off-engrave",
	});
}

export default Component;
