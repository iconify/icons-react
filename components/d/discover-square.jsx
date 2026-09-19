import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tq9qcb-8l.css';
import '../../css/w/wbom373wg.css';
import '../../css/f/f5mkz9bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tq9qcb-8l"/><path class="wbom373wg"/><path class="f5mkz9bge"/></g>`,
		"fallback": "hugeicons:discover-square",
	});
}

export default Component;
