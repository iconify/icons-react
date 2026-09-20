import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/djusukn-p.css';
import '../../css/h/hng99zb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="djusukn-p"/><path class="hng99zb_t"/></g>`,
		"fallback": "reicon:address-book-filled",
	});
}

export default Component;
