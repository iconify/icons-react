import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u189c4bon.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u189c4bon"/>`,
		"fallback": "whh:g",
	});
}

export default Component;
