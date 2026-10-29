import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d82i_obre.css';
import '../../css/b/b5s-lcbiv.css';
import '../../css/j/jwwtjnb8q.css';
import '../../css/a/a16cc9b_a.css';
import '../../css/l/l2bljsbmn.css';
import '../../css/x/x6gd_prso.css';
import '../../css/z/zh_p1cc6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d82i_obre wm-k"/><path class="b5s-lcbiv wm-a"/><path class="jwwtjnb8q wm-shadow"/><path class="a16cc9b_a wm-k"/><path class="l2bljsbmn wm-a"/><path class="wm-k x6gd_prso"/><path class="wm-a zh_p1cc6o"/></g>`,
		"fallback": "withicons:bug-engrave",
	});
}

export default Component;
