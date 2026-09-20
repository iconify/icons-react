import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itn_tacpq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itn_tacpq"/>`,
		"fallback": "selfhst:eleventy-dark",
	});
}

export default Component;
