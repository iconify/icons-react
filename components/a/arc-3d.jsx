import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kkycqccdw.css';
import '../../css/f/fp6c-v_2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kkycqccdw"/><path class="fp6c-v_2n"/></g>`,
		"fallback": "iconoir:arc-3d",
	});
}

export default Component;
