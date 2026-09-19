import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pqlq7sbei.css';
import '../../css/j/j7l690bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pqlq7sbei"/><path class="j7l690bdj"/></g>`,
		"fallback": "hugeicons:bitcoin-down-02",
	});
}

export default Component;
