import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i-h3j9bzx.css';
import '../../css/p/pqvsh4b8l.css';
import '../../css/e/etqnjha5v.css';
import '../../css/n/n8dsurkgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i-h3j9bzx wm-k"/><path class="pqvsh4b8l wm-shadow"/><path class="etqnjha5v wm-k"/><path class="n8dsurkgv wm-a"/></g>`,
		"fallback": "withicons:brain-engrave",
	});
}

export default Component;
