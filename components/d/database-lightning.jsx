import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cpupvibhg.css';
import '../../css/w/ww70erpkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cpupvibhg"/><path class="ww70erpkx"/></g>`,
		"fallback": "hugeicons:database-lightning",
	});
}

export default Component;
