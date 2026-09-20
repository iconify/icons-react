import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lumh9kbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lumh9kbaj"/>`,
		"fallback": "si:copyright-fill",
	});
}

export default Component;
