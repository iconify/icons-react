import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ikrurffev.css';
import '../../css/z/zf-hn4bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ikrurffev"/><path class="zf-hn4bdw"/></g>`,
		"fallback": "hugeicons:corner-right-down",
	});
}

export default Component;
