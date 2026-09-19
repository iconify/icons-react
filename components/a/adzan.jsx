import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yzb2trbdq.css';
import '../../css/w/wo9q6gbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yzb2trbdq"/><path class="wo9q6gbqv"/></g>`,
		"fallback": "hugeicons:adzan",
	});
}

export default Component;
