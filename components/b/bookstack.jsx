import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3lfhabdq.css';
import '../../css/a/aqn2e-b9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3lfhabdq"/><path class="aqn2e-b9e"/>`,
		"fallback": "selfhst:bookstack",
	});
}

export default Component;
