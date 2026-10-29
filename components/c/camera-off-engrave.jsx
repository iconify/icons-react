import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fs4bv7bod.css';
import '../../css/p/psnkz2bcb.css';
import '../../css/a/a28-wzbev.css';
import '../../css/v/v0rdnccee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fs4bv7bod wm-shadow"/><path class="psnkz2bcb wm-k"/><circle class="a28-wzbev wm-a"/><path class="v0rdnccee wm-s"/></g>`,
		"fallback": "withicons:camera-off-engrave",
	});
}

export default Component;
