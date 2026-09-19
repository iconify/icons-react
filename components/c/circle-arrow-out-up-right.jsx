import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sk778ol3e.css';
import '../../css/w/w-y29rxdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sk778ol3e"/><path class="w-y29rxdl"/></g>`,
		"fallback": "hugeicons:circle-arrow-out-up-right",
	});
}

export default Component;
