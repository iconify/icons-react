import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg48uhzxf.css';
import '../../css/i/i-gh0uunf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg48uhzxf"/><path class="i-gh0uunf"/>`,
		"fallback": "selfhst:elk",
	});
}

export default Component;
