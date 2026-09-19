import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fjetg3ljf.css';
import '../../css/w/w8_xcql2x.css';
import '../../css/f/fcu0vbbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fjetg3ljf"/><path class="w8_xcql2x"/><path class="fcu0vbbfm"/></g>`,
		"fallback": "hugeicons:brick-wall-fire",
	});
}

export default Component;
