import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvkok9nbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvkok9nbf"/>`,
		"fallback": "iconamoon:comment-close-bold",
	});
}

export default Component;
