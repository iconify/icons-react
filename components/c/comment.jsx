import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jov7b6hyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jov7b6hyi"/>`,
		"fallback": "mdi-light:comment",
	});
}

export default Component;
