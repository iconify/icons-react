import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsweqxb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsweqxb6v"/>`,
		"fallback": "akar-icons:android-fill",
	});
}

export default Component;
