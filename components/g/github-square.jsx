import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el39ovbzq.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el39ovbzq"/>`,
		"fallback": "fa:github-square",
	});
}

export default Component;
