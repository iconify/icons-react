import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/plu5itbcm.css';
import '../../css/p/pt0xyebsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="plu5itbcm"/><path class="pt0xyebsm"/></g>`,
		"fallback": "hugeicons:encrypt",
	});
}

export default Component;
