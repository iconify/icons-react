import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0-ck1g3u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0-ck1g3u"/>`,
		"fallback": "simple-line-icons:calculator",
	});
}

export default Component;
