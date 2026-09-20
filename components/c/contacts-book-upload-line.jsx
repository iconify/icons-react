import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja3ox0nfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja3ox0nfa"/>`,
		"fallback": "ri:contacts-book-upload-line",
	});
}

export default Component;
