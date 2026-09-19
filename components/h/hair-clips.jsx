import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/ctsskzs6g.css';
import '../../css/w/wm0rg-bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ctsskzs6g"/><path class="wm0rg-bed"/></g>`,
		"fallback": "hugeicons:hair-clips",
	});
}

export default Component;
