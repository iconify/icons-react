import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zui1j9b_e.css';
import '../../css/x/x0tc4abcz.css';
import '../../css/w/w-jmn3bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="zui1j9b_e"/><path class="x0tc4abcz"/><path class="w-jmn3bjx"/></g>`,
		"fallback": "evicons:charging-cable",
	});
}

export default Component;
