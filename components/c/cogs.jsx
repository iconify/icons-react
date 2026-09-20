import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5buxdvyt.css';
import '../../css/o/objm-ccgw.css';
import '../../css/w/w_5g2gbpt.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5buxdvyt"/><path class="objm-ccgw"/><path class="w_5g2gbpt"/>`,
		"fallback": "lineicons:cogs",
	});
}

export default Component;
