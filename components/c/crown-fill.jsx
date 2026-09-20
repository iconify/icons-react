import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9o_cmb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f9o_cmb9l"/>`,
		"fallback": "keyline-icons:crown-fill",
	});
}

export default Component;
