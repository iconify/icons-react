import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/du46yjbbq.css';
import '../../css/z/z741_-bcd.css';
import '../../css/v/v92h_qbhp.css';
import '../../css/w/wisjxkbkb.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="du46yjbbq"/><path class="z741_-bcd"/><path class="v92h_qbhp"/><path class="wisjxkbkb"/></g>`,
		"fallback": "cif:er",
	});
}

export default Component;
