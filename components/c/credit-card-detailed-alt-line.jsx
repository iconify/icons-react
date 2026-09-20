import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty-agzhxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty-agzhxs"/>`,
		"fallback": "si:credit-card-detailed-alt-line",
	});
}

export default Component;
