import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/udnplub3j.css';
import '../../css/g/gsvrl7yuk.css';
import '../../css/o/oy96xogod.css';
import '../../css/h/hxs3abczo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="udnplub3j"/><path class="gsvrl7yuk"/><path class="oy96xogod"/><circle class="hxs3abczo"/></g>`,
		"fallback": "andrsrxn:house-map-pin",
	});
}

export default Component;
