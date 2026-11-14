import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s9zp2rz4u.css';
import '../../css/t/tjk88carh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s9zp2rz4u"/><path class="tjk88carh"/></g>`,
		"fallback": "hugeicons:engine",
	});
}

export default Component;
