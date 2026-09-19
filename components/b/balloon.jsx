import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uxb6odrtq.css';
import '../../css/z/zjz2e1flz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uxb6odrtq"/><path class="zjz2e1flz"/></g>`,
		"fallback": "hugeicons:balloon",
	});
}

export default Component;
