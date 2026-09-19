import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n5flk5b-y.css';
import '../../css/i/i7zipxbti.css';
import '../../css/t/tpurk853y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n5flk5b-y"/><path class="i7zipxbti"/><path class="tpurk853y"/></g>`,
		"fallback": "hugeicons:delete-04",
	});
}

export default Component;
