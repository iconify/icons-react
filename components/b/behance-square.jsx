import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c65qsgblx.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c65qsgblx"/>`,
		"fallback": "fa:behance-square",
	});
}

export default Component;
