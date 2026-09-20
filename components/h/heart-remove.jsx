import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gdl6kot9a.css';
import '../../css/n/nu1vehbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gdl6kot9a"/><path class="nu1vehbrk"/></g>`,
		"fallback": "reicon:heart-remove",
	});
}

export default Component;
