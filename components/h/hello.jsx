import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lboxgjb3l.css';
import '../../css/c/c_0n8ccxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lboxgjb3l"/><path clip-rule="evenodd" class="c_0n8ccxt"/></g>`,
		"fallback": "gg:hello",
	});
}

export default Component;
