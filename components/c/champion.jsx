import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f0nwloajm.css';
import '../../css/v/v7ekfigbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f0nwloajm"/><path class="v7ekfigbk"/></g>`,
		"fallback": "hugeicons:champion",
	});
}

export default Component;
