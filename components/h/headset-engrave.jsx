import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xzk3ecj6k.css';
import '../../css/h/hegkb1m4u.css';
import '../../css/c/cvk-bup-z.css';
import '../../css/a/alwzv4b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xzk3ecj6k"/><path class="hegkb1m4u wm-shadow"/><path class="cvk-bup-z"/><path class="alwzv4b_p"/></g>`,
		"fallback": "withicons:headset-engrave",
	});
}

export default Component;
