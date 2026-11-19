import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0fy7du1b.css';
import '../../css/z/zm2tl2bch.css';
import '../../css/g/gdxk1qbnb.css';
import '../../css/m/m8-yl2b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y0fy7du1b"/><path class="zm2tl2bch"/><path clip-rule="evenodd" class="gdxk1qbnb"/><path class="m8-yl2b9u"/></g>`,
		"fallback": "andrsrxn:bed-bunk",
	});
}

export default Component;
