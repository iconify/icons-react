import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p3bd7aclu.css';
import '../../css/k/kp3yjzrlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p3bd7aclu"/><path class="kp3yjzrlp"/></g>`,
		"fallback": "hugeicons:ai-swap",
	});
}

export default Component;
