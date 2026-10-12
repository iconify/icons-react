import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jh3f1fb1v.css';
import '../../css/p/p_12btryx.css';
import '../../css/n/nqbqqmbgl.css';
import '../../css/b/bgepzj3ez.css';
import '../../css/t/t2iodvv9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jh3f1fb1v"/><path class="p_12btryx"/><path class="nqbqqmbgl"/><path class="bgepzj3ez"/><path class="t2iodvv9q"/></g>`,
		"fallback": "andrsrxn:heart-handshake",
	});
}

export default Component;
