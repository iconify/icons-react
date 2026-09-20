import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud-3rhbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud-3rhbhb"/>`,
		"fallback": "uil:credit-card-search",
	});
}

export default Component;
