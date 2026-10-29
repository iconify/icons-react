import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lg_nejb3d.css';
import '../../css/x/xnz7p-bku.css';
import '../../css/h/hbuj9d8ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lg_nejb3d wm-k"/><path class="wm-k xnz7p-bku"/><path class="hbuj9d8ju wm-a"/></g>`,
		"fallback": "withicons:car-front-sketch",
	});
}

export default Component;
