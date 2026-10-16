import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ske3-m5ph.css';
import '../../css/s/scl-k_bqr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ske3-m5ph"/><path class="scl-k_bqr"/>`,
		"fallback": "energy-icons:face-shield-20-bold",
	});
}

export default Component;
