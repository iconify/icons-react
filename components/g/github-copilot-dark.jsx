import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1zld5b4z.css';

const viewBox = {"width":256,"height":208};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1zld5b4z"/>`,
		"fallback": "thesvg-color:github-copilot-dark",
	});
}

export default Component;
