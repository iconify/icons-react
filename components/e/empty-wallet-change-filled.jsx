import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g4n2zq4hf.css';
import '../../css/p/pkha30b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g4n2zq4hf"/><path class="pkha30b-w"/></g>`,
		"fallback": "reicon:empty-wallet-change-filled",
	});
}

export default Component;
