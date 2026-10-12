import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ff0nyrbgo.css';
import '../../css/y/y5rx7925u.css';
import '../../css/t/txiuzt82i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ff0nyrbgo"/><path class="y5rx7925u"/><path class="txiuzt82i"/></g>`,
		"fallback": "andrsrxn:house-star",
	});
}

export default Component;
