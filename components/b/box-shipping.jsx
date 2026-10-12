import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht602sbgk.css';
import '../../css/l/lj-4xubzz.css';
import '../../css/y/ywy9y1bau.css';
import '../../css/f/fj6by_bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ht602sbgk"/><rect class="lj-4xubzz"/><path class="ywy9y1bau"/><path class="fj6by_bru"/></g>`,
		"fallback": "andrsrxn:box-shipping",
	});
}

export default Component;
