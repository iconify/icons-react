import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs8s6vbov.css';
import '../../css/a/a6q-egbcm.css';

const viewBox = {"width":13547,"height":4513};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs8s6vbov"/><path class="a6q-egbcm"/>`,
		"fallback": "thesvg-color:bybit",
	});
}

export default Component;
