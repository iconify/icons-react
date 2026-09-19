import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okl-q-bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okl-q-bav"/>`,
		"fallback": "boxicons:folder-plus-filled",
	});
}

export default Component;
