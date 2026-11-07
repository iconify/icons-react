import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bun2tveba.css';
import '../../css/j/jkjtg1bfn.css';
import '../../css/v/vf4j3wl2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bun2tveba"/><path class="jkjtg1bfn"/><path class="vf4j3wl2w"/>`,
		"fallback": "solar:cash-out-bold",
	});
}

export default Component;
