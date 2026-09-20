import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hnryw_gru.css';
import '../../css/h/ht04aqbne.css';
import '../../css/x/xzrrjnu7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hnryw_gru"/><path clip-rule="evenodd" class="ht04aqbne"/><path class="xzrrjnu7k"/></g>`,
		"fallback": "solar:adhesive-plaster-bold",
	});
}

export default Component;
