import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3x7q5b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p3x7q5b1j"/>`,
		"fallback": "griddy-icons:hide-sidebar",
	});
}

export default Component;
