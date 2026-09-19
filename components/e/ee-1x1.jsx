import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdia6fa5z.css';
import '../../css/q/q2l4humxv.css';
import '../../css/m/me0wbo9yd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdia6fa5z"/><path class="q2l4humxv"/><path class="me0wbo9yd"/>`,
		"fallback": "flag:ee-1x1",
	});
}

export default Component;
