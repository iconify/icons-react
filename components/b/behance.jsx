import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0-l-ecya.css';

const viewBox = {"width":2048,"height":1344};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0-l-ecya"/>`,
		"fallback": "fa:behance",
	});
}

export default Component;
