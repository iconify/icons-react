import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u79qfhp1l.css';
import '../../css/w/womghjzhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="u79qfhp1l"/><path clip-rule="evenodd" class="womghjzhn"/></g>`,
		"fallback": "bitcoin-icons:address-book-outline",
	});
}

export default Component;
