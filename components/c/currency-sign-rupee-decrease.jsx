import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tq0ay4bph.css';
import '../../css/p/p6nw2ebqo.css';
import '../../css/j/jj1aelbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tq0ay4bph"/><path class="p6nw2ebqo"/><path class="jj1aelbtu"/></g>`,
		"fallback": "streamline-ultimate:currency-sign-rupee-decrease",
	});
}

export default Component;
