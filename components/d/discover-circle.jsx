import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jeoamabzd.css';
import '../../css/t/tq9qcb-8l.css';
import '../../css/w/wbom373wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jeoamabzd"/><path class="tq9qcb-8l"/><path class="wbom373wg"/></g>`,
		"fallback": "hugeicons:discover-circle",
	});
}

export default Component;
