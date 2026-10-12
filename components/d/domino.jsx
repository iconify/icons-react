import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5liu5b6p.css';
import '../../css/i/i0lqgcc0g.css';
import '../../css/k/k6hhxwxzv.css';
import '../../css/v/vk9m68ywx.css';
import '../../css/v/viy62pb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n5liu5b6p"/><path class="i0lqgcc0g"/><circle transform="rotate(90 9.17 15.9)" class="k6hhxwxzv"/><circle transform="rotate(90 12 6.62)" class="vk9m68ywx"/><circle transform="rotate(90 14.83 18.17)" class="viy62pb6j"/></g>`,
		"fallback": "andrsrxn:domino",
	});
}

export default Component;
