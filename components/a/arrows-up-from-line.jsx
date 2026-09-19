import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l_1kllbox.css';
import '../../css/u/uih_zvhtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l_1kllbox"/><path class="uih_zvhtv"/></g>`,
		"fallback": "hugeicons:arrows-up-from-line",
	});
}

export default Component;
