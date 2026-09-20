import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1-s6rbnb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1-s6rbnb"/>`,
		"fallback": "streamline:desktop-delete",
	});
}

export default Component;
