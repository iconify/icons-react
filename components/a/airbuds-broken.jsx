import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lamtud0kt.css';
import '../../css/r/r_1f29b9n.css';
import '../../css/o/oomb74bzs.css';
import '../../css/c/cx0jtacae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lamtud0kt"/><path class="r_1f29b9n"/><path class="oomb74bzs"/><path class="cx0jtacae"/></g>`,
		"fallback": "solar:airbuds-broken",
	});
}

export default Component;
