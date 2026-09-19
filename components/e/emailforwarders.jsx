import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j05ms3bzq.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j05ms3bzq"/>`,
		"fallback": "whh:emailforwarders",
	});
}

export default Component;
