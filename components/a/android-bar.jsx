import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5mgqkkzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5mgqkkzv"/>`,
		"fallback": "ion:android-bar",
	});
}

export default Component;
