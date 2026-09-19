import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d57zedchk.css';
import '../../css/e/emwqxhbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d57zedchk"/><path class="emwqxhbgg"/></g>`,
		"fallback": "hugeicons:crane",
	});
}

export default Component;
