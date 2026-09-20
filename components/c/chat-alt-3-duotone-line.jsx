import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd6urnymg.css';
import '../../css/d/d-18cxbdq.css';
import '../../css/g/g4amwu-cm.css';
import '../../css/x/xrumyjbiu.css';
import '../../css/k/k_n89lz_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bd6urnymg"/><path class="d-18cxbdq"/><circle class="g4amwu-cm"/><circle class="xrumyjbiu"/><circle class="k_n89lz_s"/>`,
		"fallback": "lets-icons:chat-alt-3-duotone-line",
	});
}

export default Component;
