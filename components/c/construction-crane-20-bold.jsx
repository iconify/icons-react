import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scv2f5bpz.css';
import '../../css/x/xk2zqv2dn.css';
import '../../css/g/g33vo8vvy.css';
import '../../css/u/um41547jn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scv2f5bpz"/><path class="xk2zqv2dn"/><path class="g33vo8vvy"/><path class="um41547jn"/>`,
		"fallback": "energy-icons:construction-crane-20-bold",
	});
}

export default Component;
