import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi870p-xs.css';
import '../../css/f/fcxs7zbhn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi870p-xs"/><path class="fcxs7zbhn"/>`,
		"fallback": "fxemoji:hand",
	});
}

export default Component;
