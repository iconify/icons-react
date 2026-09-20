import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wotq-3b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wotq-3b7o"/>`,
		"fallback": "solar:forward-broken",
	});
}

export default Component;
