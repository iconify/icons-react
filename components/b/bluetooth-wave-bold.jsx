import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pqe01s-uy.css';
import '../../css/v/vm3y-4h5x.css';
import '../../css/t/tgozcjbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pqe01s-uy"/><path class="vm3y-4h5x"/><path class="tgozcjbqw"/></g>`,
		"fallback": "solar:bluetooth-wave-bold",
	});
}

export default Component;
