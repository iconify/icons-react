import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vlfpssodi.css';
import '../../css/y/yqqkq0b3t.css';
import '../../css/m/maynlgbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="vlfpssodi"/><path class="yqqkq0b3t"/><path class="maynlgbvl"/></g>`,
		"fallback": "hugeicons:beef",
	});
}

export default Component;
