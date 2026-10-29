import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kf25jz3yp.css';
import '../../css/v/vbukufbqb.css';
import '../../css/c/c-15_29zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kf25jz3yp"/><path class="vbukufbqb wm-k"/><path class="c-15_29zx wm-a"/></g>`,
		"fallback": "withicons:headphones-sketch",
	});
}

export default Component;
