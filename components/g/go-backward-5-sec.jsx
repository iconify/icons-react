import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w_m4sxbwf.css';
import '../../css/u/u89omufwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w_m4sxbwf"/><path class="u89omufwi"/></g>`,
		"fallback": "hugeicons:go-backward-5-sec",
	});
}

export default Component;
