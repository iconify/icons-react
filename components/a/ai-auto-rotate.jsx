import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xgco95bzv.css';
import '../../css/m/mt1-zg82v.css';
import '../../css/c/c-q4twgtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xgco95bzv"/><path class="mt1-zg82v"/><path class="c-q4twgtg"/></g>`,
		"fallback": "hugeicons:ai-auto-rotate",
	});
}

export default Component;
