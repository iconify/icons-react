import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q8ytpqbtc.css';
import '../../css/w/wxrvz1bup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q8ytpqbtc"/><path class="wxrvz1bup"/></g>`,
		"fallback": "iconoir:graph-up",
	});
}

export default Component;
