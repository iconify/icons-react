import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i3wey7bro.css';
import '../../css/y/y_pouub4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i3wey7bro"/><path class="y_pouub4m"/></g>`,
		"fallback": "hugeicons:humidity",
	});
}

export default Component;
