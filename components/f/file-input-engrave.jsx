import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m7ikj4brc.css';
import '../../css/t/thws8cc0h.css';
import '../../css/r/r-yigfbgu.css';
import '../../css/j/jnbx89z3f.css';
import '../../css/f/feq4sitoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m7ikj4brc wm-k"/><path class="thws8cc0h wm-a"/><path class="r-yigfbgu wm-shadow"/><path class="jnbx89z3f wm-k"/><path class="feq4sitoq wm-a"/></g>`,
		"fallback": "withicons:file-input-engrave",
	});
}

export default Component;
