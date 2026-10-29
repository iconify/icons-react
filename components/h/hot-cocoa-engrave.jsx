import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r2vtnxbmp.css';
import '../../css/j/j71e28q5o.css';
import '../../css/c/c-m3yob5p.css';
import '../../css/k/km3v9nk8r.css';
import '../../css/o/o7ull5bnt.css';
import '../../css/v/vu3k_039v.css';
import '../../css/z/zp1t379qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r2vtnxbmp wm-k"/><path class="j71e28q5o wm-a"/><path class="c-m3yob5p wm-s"/><path class="km3v9nk8r wm-shadow"/><path class="o7ull5bnt wm-k"/><path class="vu3k_039v wm-a"/><path class="wm-s zp1t379qi"/></g>`,
		"fallback": "withicons:hot-cocoa-engrave",
	});
}

export default Component;
