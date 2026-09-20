import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wes4atb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wes4atb4p"/>`,
		"fallback": "keyline-icons:credit-card-check-sharp",
	});
}

export default Component;
