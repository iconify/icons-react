import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uneym8l7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uneym8l7q"/>`,
		"fallback": "mdi:home-sound-in",
	});
}

export default Component;
