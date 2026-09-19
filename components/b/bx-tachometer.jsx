import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t02myt54b.css';
import '../../css/n/nco21hbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t02myt54b"/><path class="nco21hbfz"/>`,
		"fallback": "bx:bx-tachometer",
	});
}

export default Component;
