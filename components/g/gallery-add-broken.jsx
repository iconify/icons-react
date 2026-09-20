import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgbc9yk3h.css';
import '../../css/t/tcw2d1t9y.css';
import '../../css/q/qw59k8t0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lgbc9yk3h"/><path class="tcw2d1t9y"/><path class="qw59k8t0z"/></g>`,
		"fallback": "solar:gallery-add-broken",
	});
}

export default Component;
