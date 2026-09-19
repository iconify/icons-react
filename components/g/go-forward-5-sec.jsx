import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pbc6ycggl.css';
import '../../css/u/u89omufwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pbc6ycggl"/><path class="u89omufwi"/></g>`,
		"fallback": "hugeicons:go-forward-5-sec",
	});
}

export default Component;
