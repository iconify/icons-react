import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nfxer9pqp.css';
import '../../css/c/c1w576lzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nfxer9pqp"/><path class="c1w576lzs"/></g>`,
		"fallback": "reicon:direct-send-filled",
	});
}

export default Component;
