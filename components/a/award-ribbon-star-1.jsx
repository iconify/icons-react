import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4bdibc3k.css';
import '../../css/z/zwk_13b_h.css';
import '../../css/u/udw521wew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p4bdibc3k"/><path class="zwk_13b_h"/><path class="udw521wew"/></g>`,
		"fallback": "streamline-ultimate:award-ribbon-star-1",
	});
}

export default Component;
