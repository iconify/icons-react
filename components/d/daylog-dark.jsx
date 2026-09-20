import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2ipv8b3q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2ipv8b3q"/>`,
		"fallback": "selfhst:daylog-dark",
	});
}

export default Component;
