import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwog5qh3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwog5qh3w"/>`,
		"fallback": "selfhst:dumbassets-dark",
	});
}

export default Component;
