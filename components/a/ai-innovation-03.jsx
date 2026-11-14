import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vwn_dm20k.css';
import '../../css/i/in-w2vbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vwn_dm20k"/><path class="in-w2vbqb"/></g>`,
		"fallback": "hugeicons:ai-innovation-03",
	});
}

export default Component;
