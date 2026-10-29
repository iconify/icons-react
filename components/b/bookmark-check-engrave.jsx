import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v7n9ppbmt.css';
import '../../css/n/n8q0-sbxu.css';
import '../../css/m/me3qcxbaj.css';
import '../../css/m/meogk_ylc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v7n9ppbmt wm-k"/><path class="n8q0-sbxu wm-shadow"/><path class="me3qcxbaj wm-k"/><path class="meogk_ylc wm-a"/></g>`,
		"fallback": "withicons:bookmark-check-engrave",
	});
}

export default Component;
