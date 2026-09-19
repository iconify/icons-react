import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbp77ob5n.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbp77ob5n"/>`,
		"fallback": "whh:facebookalt",
	});
}

export default Component;
