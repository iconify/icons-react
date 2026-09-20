import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i44r3pb5l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i44r3pb5l"/>`,
		"fallback": "selfhst:hyperpipe-light",
	});
}

export default Component;
