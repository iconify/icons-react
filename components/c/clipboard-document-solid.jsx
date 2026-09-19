import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w3ezo_bpd.css';
import '../../css/q/qs7d5jb9u.css';
import '../../css/m/mn_9mqnpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w3ezo_bpd"/><path class="qs7d5jb9u"/><path class="mn_9mqnpn"/></g>`,
		"fallback": "heroicons:clipboard-document-solid",
	});
}

export default Component;
