import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhibp9b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhibp9b-v"/>`,
		"fallback": "eos-icons:activate-subscriptions",
	});
}

export default Component;
