import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_ij37bly.css';
import '../../css/f/fuslhac8e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_ij37bly"/><path class="fuslhac8e"/>`,
		"fallback": "selfhst:acquiremock-dark",
	});
}

export default Component;
