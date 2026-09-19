import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q919yeb8u.css';
import '../../css/w/wayrhob7k.css';
import '../../css/x/xb7vlqboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q919yeb8u"/><path class="wayrhob7k"/><path class="xb7vlqboe"/></g>`,
		"fallback": "hugeicons:body-armor",
	});
}

export default Component;
