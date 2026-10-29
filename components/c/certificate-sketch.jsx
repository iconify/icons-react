import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x_qr1h6di.css';
import '../../css/e/es4j3mt3g.css';
import '../../css/h/hab5ou_zs.css';
import '../../css/e/e3yj0zblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="x_qr1h6di"/><path class="es4j3mt3g wm-k"/><path class="hab5ou_zs wm-k"/><path class="e3yj0zblf wm-a"/></g>`,
		"fallback": "withicons:certificate-sketch",
	});
}

export default Component;
