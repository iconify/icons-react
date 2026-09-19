import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y2djqjb8l.css';
import '../../css/g/gbe2j6boe.css';
import '../../css/x/x8niydb0w.css';
import '../../css/d/d9cjeocjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y2djqjb8l"/><path class="gbe2j6boe"/><path class="x8niydb0w"/><path class="d9cjeocjq"/></g>`,
		"fallback": "hugeicons:car-02",
	});
}

export default Component;
