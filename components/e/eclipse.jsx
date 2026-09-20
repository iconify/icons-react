import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzpi8mbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzpi8mbgi"/>`,
		"fallback": "mynaui:eclipse",
	});
}

export default Component;
