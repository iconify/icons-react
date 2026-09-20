import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyjgv9b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyjgv9b0l"/>`,
		"fallback": "mingcute:folder-security-line",
	});
}

export default Component;
