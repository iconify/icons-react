import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjh43p2th.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjh43p2th"/>`,
		"fallback": "selfhst:habitat-social-dark",
	});
}

export default Component;
