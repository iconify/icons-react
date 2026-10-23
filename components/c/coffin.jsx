import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpi2m7siu.css';
import '../../css/n/npy1ot90y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bpi2m7siu"/><path class="npy1ot90y"/></g>`,
		"fallback": "andrsrxn:coffin",
	});
}

export default Component;
