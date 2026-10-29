import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kijk4bcxn.css';
import '../../css/n/nuxk96b5j.css';
import '../../css/a/agevo0b7q.css';
import '../../css/x/xej4-bcnx.css';
import '../../css/x/xe40m6lqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kijk4bcxn"/><path class="nuxk96b5j wm-k"/><path class="agevo0b7q wm-k"/><path class="wm-k xej4-bcnx"/><path class="wm-a xe40m6lqc"/></g>`,
		"fallback": "withicons:graduation-cap-sketch",
	});
}

export default Component;
