import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss6w1acng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss6w1acng"/>`,
		"fallback": "bx:bxl-mastodon",
	});
}

export default Component;
