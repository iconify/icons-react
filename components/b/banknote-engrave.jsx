import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h94989bqr.css';
import '../../css/c/c4bils6ki.css';
import '../../css/b/bbj5cibiu.css';
import '../../css/g/g_3i-5a_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h94989bqr wm-k"/><path class="c4bils6ki wm-shadow"/><path class="bbj5cibiu wm-k"/><path class="g_3i-5a_q wm-a"/></g>`,
		"fallback": "withicons:banknote-engrave",
	});
}

export default Component;
