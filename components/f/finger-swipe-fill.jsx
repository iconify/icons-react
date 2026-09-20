import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw6c2jk0b.css';
import '../../css/j/j1j4zhbfy.css';
import '../../css/g/gocw17-6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mw6c2jk0b"/><path class="j1j4zhbfy"/><path class="gocw17-6u"/>`,
		"fallback": "mingcute:finger-swipe-fill",
	});
}

export default Component;
