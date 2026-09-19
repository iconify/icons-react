import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mme__qbhi.css';
import '../../css/a/as3fepoct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mme__qbhi"/><circle class="as3fepoct"/>`,
		"fallback": "bx:food-tag",
	});
}

export default Component;
