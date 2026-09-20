import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nklzucb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nklzucb9e"/>`,
		"fallback": "sidekickicons:dice",
	});
}

export default Component;
