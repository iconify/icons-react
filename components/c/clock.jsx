import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh5h3cber.css';
import '../../css/y/yzwsfcckq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh5h3cber"/><path class="yzwsfcckq"/>`,
		"fallback": "cil:clock",
	});
}

export default Component;
