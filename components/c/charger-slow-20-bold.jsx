import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo62-ybxn.css';
import '../../css/q/qxpl-b1jp.css';
import '../../css/y/yghwv6byq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo62-ybxn"/><path class="qxpl-b1jp"/><path class="yghwv6byq"/>`,
		"fallback": "energy-icons:charger-slow-20-bold",
	});
}

export default Component;
