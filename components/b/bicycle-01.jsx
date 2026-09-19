import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qlu58ik7m.css';
import '../../css/a/assxj4gal.css';
import '../../css/x/xzjhvcb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qlu58ik7m"/><path class="assxj4gal"/><path class="xzjhvcb1h"/></g>`,
		"fallback": "hugeicons:bicycle-01",
	});
}

export default Component;
