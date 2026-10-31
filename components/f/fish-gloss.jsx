import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvw8pmbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvw8pmbcs"/>`,
		"fallback": "withicons:fish-gloss",
	});
}

export default Component;
