import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2x7se42l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2x7se42l"/>`,
		"fallback": "selfhst:atria-dark",
	});
}

export default Component;
