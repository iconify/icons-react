import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oun0_yubu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oun0_yubu"/>`,
		"fallback": "stash:arrow-reply-light",
	});
}

export default Component;
