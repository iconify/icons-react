import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yszjebc_r.css';
import '../../css/k/kuix36bab.css';
import '../../css/u/uns2q8bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yszjebc_r"/><path class="kuix36bab"/><path class="uns2q8bjl"/></g>`,
		"fallback": "solar:align-vertical-spacing-broken",
	});
}

export default Component;
