import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2pvtlb9z.css';
import '../../css/v/v0qhndbky.css';
import '../../css/p/pogdy4bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o2pvtlb9z"/><path class="v0qhndbky"/><path class="pogdy4bmf"/></g>`,
		"fallback": "andrsrxn:image-lock",
	});
}

export default Component;
