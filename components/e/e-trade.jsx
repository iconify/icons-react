import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zykmcsy6u.css';
import '../../css/c/cf4rmeasd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zykmcsy6u"/><path class="cf4rmeasd"/>`,
		"fallback": "selfhst:e-trade",
	});
}

export default Component;
