import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blosjfb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blosjfb9k"/>`,
		"fallback": "mdi:betamax",
	});
}

export default Component;
