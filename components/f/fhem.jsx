import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe2xp6bxc.css';
import '../../css/q/qa72txrwd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe2xp6bxc"/><path class="qa72txrwd"/>`,
		"fallback": "selfhst:fhem",
	});
}

export default Component;
