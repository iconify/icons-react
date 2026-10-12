import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v0afoshor.css';
import '../../css/k/kk0dwxb6v.css';
import '../../css/a/a1iuq0b3k.css';
import '../../css/b/bl2h6dmty.css';
import '../../css/y/ythty-82h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v0afoshor"/><path class="kk0dwxb6v"/><path class="a1iuq0b3k"/><path class="bl2h6dmty"/><path class="ythty-82h"/></g>`,
		"fallback": "andrsrxn:cars",
	});
}

export default Component;
