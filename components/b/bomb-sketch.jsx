import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f1zgeeb4m.css';
import '../../css/u/u7v3onpgn.css';
import '../../css/x/x6znfw3hn.css';
import '../../css/a/afoe1d7we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f1zgeeb4m"/><path class="u7v3onpgn wm-k"/><path class="wm-a x6znfw3hn"/><path class="afoe1d7we wm-s"/></g>`,
		"fallback": "withicons:bomb-sketch",
	});
}

export default Component;
