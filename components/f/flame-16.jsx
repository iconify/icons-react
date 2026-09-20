import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aylyq8bhq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aylyq8bhq"/>`,
		"fallback": "octicon:flame-16",
	});
}

export default Component;
