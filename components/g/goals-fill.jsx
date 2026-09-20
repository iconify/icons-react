import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp-b7wzwg.css';
import '../../css/w/wsg3jcbeq.css';
import '../../css/f/f430c2b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp-b7wzwg"/><path class="wsg3jcbeq"/><path class="f430c2b9d"/>`,
		"fallback": "mage:goals-fill",
	});
}

export default Component;
