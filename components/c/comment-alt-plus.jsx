import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl0vbpbky.css';
import '../../css/x/xq0giqbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl0vbpbky"/><path class="xq0giqbry"/>`,
		"fallback": "uim:comment-alt-plus",
	});
}

export default Component;
