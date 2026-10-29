import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e5emcvbhr.css';
import '../../css/s/samcl6ghe.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/m/m--blzueu.css';
import '../../css/t/tjmki8x4n.css';
import '../../css/t/t1khfhdyn.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e5emcvbhr wm-k"/><path class="samcl6ghe wm-a"/><path class="ol-kpp5cg wm-s"/><path class="m--blzueu wm-shadow"/><path class="tjmki8x4n wm-k"/><path class="t1khfhdyn wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:alarm-clock-off-engrave",
	});
}

export default Component;
