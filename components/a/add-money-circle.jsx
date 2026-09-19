import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qxe6-zbrf.css';
import '../../css/e/ebyk6d86k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qxe6-zbrf"/><path class="ebyk6d86k"/></g>`,
		"fallback": "hugeicons:add-money-circle",
	});
}

export default Component;
