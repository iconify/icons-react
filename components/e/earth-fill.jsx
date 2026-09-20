import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jisuh7bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jisuh7bav"/>`,
		"fallback": "keyline-icons:earth-fill",
	});
}

export default Component;
