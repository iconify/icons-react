import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tge36xbah.css';
import '../../css/p/pvql17bze.css';
import '../../css/k/kugyku2sr.css';
import '../../css/z/zvz-m9brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tge36xbah"/><path class="pvql17bze"/><path class="kugyku2sr wm-k"/><path class="wm-a zvz-m9brs"/></g>`,
		"fallback": "withicons:cookie-sketch",
	});
}

export default Component;
