import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pce87acjo.css';
import '../../css/f/f23a81b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pce87acjo"/><path class="f23a81b0f"/></g>`,
		"fallback": "reicon:document-forward-filled",
	});
}

export default Component;
