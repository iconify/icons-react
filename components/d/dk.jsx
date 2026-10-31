import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3575dbqw.css';
import '../../css/u/ubcfiubyr.css';
import '../../css/n/ntakfoc9q.css';

const viewBox = {"width":301,"height":227};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m3575dbqw"/><path class="ubcfiubyr"/><path class="ntakfoc9q"/></g>`,
		"fallback": "cif:dk",
	});
}

export default Component;
