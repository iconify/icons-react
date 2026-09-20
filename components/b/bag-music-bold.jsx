import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pkr_a7gda.css';
import '../../css/e/ed5rao9ma.css';
import '../../css/g/g0c7m3b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pkr_a7gda"/><path class="ed5rao9ma"/><path clip-rule="evenodd" class="g0c7m3b9s"/></g>`,
		"fallback": "solar:bag-music-bold",
	});
}

export default Component;
