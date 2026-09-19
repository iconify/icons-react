import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eedy2_2_u.css';
import '../../css/j/jyg2dbbxi.css';
import '../../css/d/d69r_jv7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eedy2_2_u"/><path class="jyg2dbbxi"/><path class="d69r_jv7v"/></g>`,
		"fallback": "hugeicons:club",
	});
}

export default Component;
