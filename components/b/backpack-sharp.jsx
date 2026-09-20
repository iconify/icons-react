import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j6vg-hbkh.css';
import '../../css/g/gsqspqbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j6vg-hbkh"/><path class="gsqspqbry"/></g>`,
		"fallback": "pixelarticons:backpack-sharp",
	});
}

export default Component;
