import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7ufncced.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7ufncced"/>`,
		"fallback": "fa7-regular:comment-alt",
	});
}

export default Component;
