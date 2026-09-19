import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xvfjjxbtd.css';
import '../../css/v/vrq-bdbyc.css';
import '../../css/v/v7lcw7jtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xvfjjxbtd"/><path class="vrq-bdbyc"/><path class="v7lcw7jtd"/></g>`,
		"fallback": "hugeicons:cable",
	});
}

export default Component;
