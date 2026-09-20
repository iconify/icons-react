import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yep9uo4ry.css';
import '../../css/l/loio1nbeb.css';
import '../../css/l/l89sbbcyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="yep9uo4ry"/><path class="loio1nbeb"/><rect class="l89sbbcyo"/></g>`,
		"fallback": "lucide:between-horizontal-end",
	});
}

export default Component;
