import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4-ax83th.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4-ax83th"/>`,
		"fallback": "codicon:github-alt",
	});
}

export default Component;
