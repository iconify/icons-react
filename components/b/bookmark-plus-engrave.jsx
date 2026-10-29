import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vp1dk4b7p.css';
import '../../css/n/n8q0-sbxu.css';
import '../../css/m/me3qcxbaj.css';
import '../../css/t/t_wo4ibie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vp1dk4b7p wm-k"/><path class="n8q0-sbxu wm-shadow"/><path class="me3qcxbaj wm-k"/><path class="t_wo4ibie wm-a"/></g>`,
		"fallback": "withicons:bookmark-plus-engrave",
	});
}

export default Component;
