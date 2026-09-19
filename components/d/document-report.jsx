import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbk9oiw8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbk9oiw8h"/>`,
		"fallback": "heroicons-outline:document-report",
	});
}

export default Component;
