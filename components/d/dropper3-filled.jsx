import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n_3wprbsp.css';
import '../../css/f/fej3jhoxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n_3wprbsp"/><path class="fej3jhoxo"/></g>`,
		"fallback": "reicon:dropper3-filled",
	});
}

export default Component;
