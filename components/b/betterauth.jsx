import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwr-6db9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwr-6db9w"/>`,
		"fallback": "simple-icons:betterauth",
	});
}

export default Component;
