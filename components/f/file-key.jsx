import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8nhe2byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8nhe2byl"/>`,
		"fallback": "hugeicons:file-key",
	});
}

export default Component;
