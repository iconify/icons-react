import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yhl7b5ooe.css';
import '../../css/d/dfmyzlbdw.css';
import '../../css/w/wf1t3dbyk.css';
import '../../css/x/xcd_k67zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yhl7b5ooe"/><path class="dfmyzlbdw"/><path class="wf1t3dbyk"/><path class="xcd_k67zj"/></g>`,
		"fallback": "hugeicons:biohazard",
	});
}

export default Component;
