import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhpycbbzt.css';
import '../../css/g/gxdkw6pqr.css';
import '../../css/k/kp3z9vp1s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhpycbbzt"/><path class="gxdkw6pqr"/><path class="kp3z9vp1s"/>`,
		"fallback": "energy-icons:gift-48",
	});
}

export default Component;
