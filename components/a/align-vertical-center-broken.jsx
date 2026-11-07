import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aed5lhbuz.css';
import '../../css/d/dfh-rj50l.css';
import '../../css/a/avlf34b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aed5lhbuz"/><path class="dfh-rj50l"/><path class="avlf34b0a"/></g>`,
		"fallback": "solar:align-vertical-center-broken",
	});
}

export default Component;
