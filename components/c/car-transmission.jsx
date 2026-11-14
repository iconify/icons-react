import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wlkkz1sgf.css';
import '../../css/g/gw0l422ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wlkkz1sgf"/><path class="gw0l422ve"/></g>`,
		"fallback": "hugeicons:car-transmission",
	});
}

export default Component;
