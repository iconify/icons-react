import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5i7rfbbf.css';
import '../../css/l/ls62l0b2z.css';
import '../../css/q/qo2yf7i4i.css';
import '../../css/n/nzaemzbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v5i7rfbbf"/><path class="ls62l0b2z"/><path class="qo2yf7i4i"/><path class="nzaemzbdu"/></g>`,
		"fallback": "andrsrxn:book-wifi",
	});
}

export default Component;
