import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ouvmfj4ut.css';
import '../../css/b/bomz11bhc.css';
import '../../css/b/buo1kubox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ouvmfj4ut"/><path class="bomz11bhc"/><path class="buo1kubox"/></g>`,
		"fallback": "solar:bag-smile-broken",
	});
}

export default Component;
