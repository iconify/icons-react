import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je37nc8jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="je37nc8jb"/>`,
		"fallback": "keyline-icons:clock-7-fill",
	});
}

export default Component;
