import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nm3w18p8d.css';
import '../../css/w/wo5v4_8xt.css';
import '../../css/k/kpjz0wblu.css';
import '../../css/u/u4synlg4b.css';
import '../../css/c/cd-6u1e9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nm3w18p8d wm-k"/><path class="wm-s wo5v4_8xt"/><path class="kpjz0wblu wm-shadow"/><path class="u4synlg4b wm-k"/><path class="cd-6u1e9y wm-s"/></g>`,
		"fallback": "withicons:git-branch-plus-engrave",
	});
}

export default Component;
