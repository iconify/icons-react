import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agl78fbey.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agl78fbey"/>`,
		"fallback": "ix:bookmark-filled",
	});
}

export default Component;
