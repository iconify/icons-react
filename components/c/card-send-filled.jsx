import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dnyemccis.css';
import '../../css/s/s8qdqwbpf.css';
import '../../css/f/f4k1wcxer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dnyemccis"/><path class="s8qdqwbpf"/><path clip-rule="evenodd" class="f4k1wcxer"/></g>`,
		"fallback": "reicon:card-send-filled",
	});
}

export default Component;
