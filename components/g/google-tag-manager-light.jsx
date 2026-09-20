import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byrz3kh6s.css';
import '../../css/y/y2h-ot9zd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byrz3kh6s"/><path class="y2h-ot9zd"/>`,
		"fallback": "selfhst:google-tag-manager-light",
	});
}

export default Component;
