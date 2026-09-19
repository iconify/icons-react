import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dw5hulxel.css';
import '../../css/d/dbmwoub8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dw5hulxel"/><path class="dbmwoub8f"/></g>`,
		"fallback": "hugeicons:briefcase-04",
	});
}

export default Component;
