import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw2-lob2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw2-lob2f"/>`,
		"fallback": "majesticons:chat-line",
	});
}

export default Component;
