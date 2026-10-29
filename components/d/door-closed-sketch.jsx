import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pj3sp_yui.css';
import '../../css/t/tawvvybgt.css';
import '../../css/h/hd5mo2bvy.css';
import '../../css/h/h7cdq_91p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pj3sp_yui"/><path class="tawvvybgt wm-k"/><path class="hd5mo2bvy wm-k"/><path class="h7cdq_91p wm-a"/></g>`,
		"fallback": "withicons:door-closed-sketch",
	});
}

export default Component;
