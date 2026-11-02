import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4vb5lb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4vb5lb2u"/>`,
		"fallback": "mingcute:folder-forbid-fill",
	});
}

export default Component;
