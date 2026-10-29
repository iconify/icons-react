import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/htexibawf.css';
import '../../css/v/vr3llnbmk.css';
import '../../css/w/wplmp2btw.css';
import '../../css/a/ajxwqpb9u.css';
import '../../css/w/wx95qzg_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="htexibawf wm-k"/><path class="vr3llnbmk wm-a"/><path class="wm-shadow wplmp2btw"/><path class="ajxwqpb9u wm-k"/><path class="wm-a wx95qzg_i"/></g>`,
		"fallback": "withicons:heart-pair-engrave",
	});
}

export default Component;
