import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8ujnbcpd.css';
import '../../css/z/zu_v8ebas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u8ujnbcpd"/><path clip-rule="evenodd" class="zu_v8ebas"/></g>`,
		"fallback": "reicon:banknote-filled",
	});
}

export default Component;
