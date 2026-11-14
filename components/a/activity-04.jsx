import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xlleuccjp.css';
import '../../css/t/twjtbteoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xlleuccjp"/><path class="twjtbteoq"/></g>`,
		"fallback": "hugeicons:activity-04",
	});
}

export default Component;
