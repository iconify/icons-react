import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzfv1-bcy.css';
import '../../css/w/wqemgtbkk.css';
import '../../css/x/x36h73bpv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzfv1-bcy"/><path class="wqemgtbkk"/><path class="x36h73bpv"/>`,
		"fallback": "energy-icons:gas-valve-20-bold",
	});
}

export default Component;
