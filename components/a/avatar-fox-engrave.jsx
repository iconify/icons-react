import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nehiwwbok.css';
import '../../css/u/u7trn5kah.css';
import '../../css/m/mr8d_cbya.css';
import '../../css/u/ujczbvb9g.css';
import '../../css/j/j5bkt9bua.css';
import '../../css/x/xowl7fblc.css';
import '../../css/k/k1se5ltfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nehiwwbok wm-k"/><path class="u7trn5kah wm-shadow"/><path class="mr8d_cbya wm-k"/><path class="ujczbvb9g wm-k"/><path class="j5bkt9bua wm-a"/><path class="wm-k xowl7fblc"/><path class="k1se5ltfu wm-k"/></g>`,
		"fallback": "withicons:avatar-fox-engrave",
	});
}

export default Component;
