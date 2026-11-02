import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywqz_0b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywqz_0b2b"/>`,
		"fallback": "mingcute:book-copy-fill",
	});
}

export default Component;
