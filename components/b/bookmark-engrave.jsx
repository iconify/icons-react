import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qxi7yn2rl.css';
import '../../css/n/n8q0-sbxu.css';
import '../../css/m/me3qcxbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qxi7yn2rl"/><path class="n8q0-sbxu wm-shadow"/><path class="me3qcxbaj"/></g>`,
		"fallback": "withicons:bookmark-engrave",
	});
}

export default Component;
