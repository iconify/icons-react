import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c0vt6ucws.css';
import '../../css/d/dge-srbqq.css';
import '../../css/f/fp8z02naw.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/z/z5ocxlbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c0vt6ucws wm-k"/><path class="dge-srbqq wm-a"/><path class="fp8z02naw wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="wm-a z5ocxlbvi"/></g>`,
		"fallback": "withicons:circle-engrave",
	});
}

export default Component;
