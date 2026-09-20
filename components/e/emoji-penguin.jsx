import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmj2aibcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmj2aibcn"/>`,
		"fallback": "mdi:emoji-penguin",
	});
}

export default Component;
