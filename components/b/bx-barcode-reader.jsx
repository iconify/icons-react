import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td2qqkb6u.css';
import '../../css/w/w6198jjkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td2qqkb6u"/><path class="w6198jjkw"/>`,
		"fallback": "bx:bx-barcode-reader",
	});
}

export default Component;
