import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weyiv4ekk.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weyiv4ekk"/>`,
		"fallback": "whh:fontgothic",
	});
}

export default Component;
