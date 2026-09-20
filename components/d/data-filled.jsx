import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2jkeg0tk.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2jkeg0tk"/>`,
		"fallback": "tdesign:data-filled",
	});
}

export default Component;
