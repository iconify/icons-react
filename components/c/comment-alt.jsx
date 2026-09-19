import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmj4v3web.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmj4v3web"/>`,
		"fallback": "zmdi:comment-alt",
	});
}

export default Component;
