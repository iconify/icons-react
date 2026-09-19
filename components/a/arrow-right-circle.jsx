import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6e2wm4vn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6e2wm4vn"/>`,
		"fallback": "f7:arrow-right-circle",
	});
}

export default Component;
