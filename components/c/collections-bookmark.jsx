import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vuutrabsm.css';
import '../../css/w/wnran_bnw.css';
import '../../css/y/yn5soub3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vuutrabsm"/><path class="wnran_bnw"/><path class="yn5soub3x"/></g>`,
		"fallback": "hugeicons:collections-bookmark",
	});
}

export default Component;
