import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ioandlqhr.css';
import '../../css/z/zgajpru0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ioandlqhr"/><path class="zgajpru0j"/></g>`,
		"fallback": "reicon:house3-filled",
	});
}

export default Component;
