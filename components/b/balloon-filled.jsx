import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkov0jvkn.css';
import '../../css/h/hn_mmf56t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wkov0jvkn"/><path class="hn_mmf56t"/></g>`,
		"fallback": "reicon:balloon-filled",
	});
}

export default Component;
