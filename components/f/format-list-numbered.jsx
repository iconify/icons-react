import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2lls-ime.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2lls-ime"/>`,
		"fallback": "mdi-light:format-list-numbered",
	});
}

export default Component;
