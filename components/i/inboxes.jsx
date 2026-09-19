import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny7p-fz4c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny7p-fz4c"/>`,
		"fallback": "bi:inboxes",
	});
}

export default Component;
