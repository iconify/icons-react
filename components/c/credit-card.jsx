import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc5evijpp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc5evijpp"/>`,
		"fallback": "roentgen:credit-card",
	});
}

export default Component;
