import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v4tmxkbes.css';
import '../../css/n/n4_xj_z7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v4tmxkbes"/><path class="n4_xj_z7l"/></g>`,
		"fallback": "andrsrxn:arrow-corner-up-left",
	});
}

export default Component;
