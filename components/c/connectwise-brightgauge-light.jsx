import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s53e0bcnh.css';
import '../../css/p/phkuhv_dq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s53e0bcnh"/><path class="phkuhv_dq"/>`,
		"fallback": "selfhst:connectwise-brightgauge-light",
	});
}

export default Component;
