import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr9qn8b9w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr9qn8b9w"/>`,
		"fallback": "selfhst:cloudflare-dark",
	});
}

export default Component;
