import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ci35hacss.css';
import '../../css/f/fzy7xu4pc.css';
import '../../css/m/m3y59dfla.css';
import '../../css/l/llod8s1is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ci35hacss wm-k"/><path class="fzy7xu4pc wm-shadow"/><path class="m3y59dfla wm-k"/><path class="llod8s1is wm-a"/></g>`,
		"fallback": "withicons:alert-triangle-engrave",
	});
}

export default Component;
