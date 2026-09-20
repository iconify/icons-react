import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oi-_nkp7v.css';
import '../../css/p/pkha30b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oi-_nkp7v"/><path class="pkha30b-w"/></g>`,
		"fallback": "reicon:empty-wallet-time-filled",
	});
}

export default Component;
