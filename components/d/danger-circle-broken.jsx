import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c5yb8bdcb.css';
import '../../css/k/ko6o-6b9b.css';
import '../../css/p/pr1jznbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c5yb8bdcb"/><path class="ko6o-6b9b"/><path class="pr1jznbmm"/></g>`,
		"fallback": "solar:danger-circle-broken",
	});
}

export default Component;
