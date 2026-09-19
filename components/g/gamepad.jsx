import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ujcvudl0t.css';
import '../../css/k/k6wfv-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ujcvudl0t"/><path class="k6wfv-b2l"/></g>`,
		"fallback": "hugeicons:gamepad",
	});
}

export default Component;
