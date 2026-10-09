import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir4g1b6-s.css';
import '../../css/w/w0_dqt_cb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir4g1b6-s"/><path class="w0_dqt_cb"/>`,
		"fallback": "energy-icons:arrow-down-to-line-20-bold",
	});
}

export default Component;
