import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1nu-xiim.css';

const viewBox = {"width":256,"height":208};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1nu-xiim"/>`,
		"fallback": "thesvg-color:github-copilot-light",
	});
}

export default Component;
