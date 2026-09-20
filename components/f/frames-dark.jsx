import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie_d5yb0q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie_d5yb0q"/>`,
		"fallback": "selfhst:frames-dark",
	});
}

export default Component;
