import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j684kzbgo.css';
import '../../css/n/ndzwtnbsc.css';
import '../../css/q/q26pnyb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j684kzbgo"/><path class="ndzwtnbsc wm-k"/><path class="q26pnyb0v wm-a"/></g>`,
		"fallback": "withicons:ethernet-port-sketch",
	});
}

export default Component;
