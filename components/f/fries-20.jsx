import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qot8k_bnm.css';
import '../../css/u/uivgpybzr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qot8k_bnm"/><path class="uivgpybzr"/>`,
		"fallback": "energy-icons:fries-20",
	});
}

export default Component;
