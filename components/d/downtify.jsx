import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czy_-bbfy.css';
import '../../css/w/w5btgvbuy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="czy_-bbfy"/><path class="w5btgvbuy"/>`,
		"fallback": "selfhst:downtify",
	});
}

export default Component;
