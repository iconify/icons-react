import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1p0z0bpa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1p0z0bpa"/>`,
		"fallback": "ix:info-feed",
	});
}

export default Component;
