import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/ds7qvjb6o.css';
import '../../css/j/jw0ryzbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ds7qvjb6o"/><path class="jw0ryzbff"/></g>`,
		"fallback": "hugeicons:building-01",
	});
}

export default Component;
