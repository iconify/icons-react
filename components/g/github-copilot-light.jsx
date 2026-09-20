import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxv435yty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxv435yty"/>`,
		"fallback": "selfhst:github-copilot-light",
	});
}

export default Component;
