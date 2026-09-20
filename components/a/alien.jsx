import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqs1aq2hm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqs1aq2hm"/>`,
		"fallback": "meteor-icons:alien",
	});
}

export default Component;
