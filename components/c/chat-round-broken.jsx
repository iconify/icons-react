import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb59sp9du.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb59sp9du"/>`,
		"fallback": "solar:chat-round-broken",
	});
}

export default Component;
