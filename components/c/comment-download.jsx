import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx9l3ibji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx9l3ibji"/>`,
		"fallback": "uil:comment-download",
	});
}

export default Component;
