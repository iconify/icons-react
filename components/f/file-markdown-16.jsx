import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgglibcip.css';
import '../../css/o/op65_9z-v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgglibcip"/><path clip-rule="evenodd" class="op65_9z-v"/>`,
		"fallback": "qlementine-icons:file-markdown-16",
	});
}

export default Component;
