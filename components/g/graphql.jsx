import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf_9qvbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf_9qvbgu"/>`,
		"fallback": "mdi:graphql",
	});
}

export default Component;
