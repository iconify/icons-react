import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ld6wmvy9y.css';
import '../../css/p/pfe73tbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ld6wmvy9y"/><path class="pfe73tbtu"/></g>`,
		"fallback": "hugeicons:corner-down-left",
	});
}

export default Component;
