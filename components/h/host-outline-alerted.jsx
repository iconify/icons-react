import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u30j6c78d.css';
import '../../css/p/p_6tgjbsm.css';
import '../../css/y/yiybycb-p.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u30j6c78d"/><path class="p_6tgjbsm"/><path class="yiybycb-p"/>`,
		"fallback": "clarity:host-outline-alerted",
	});
}

export default Component;
