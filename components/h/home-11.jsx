import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t0e5e1bzb.css';
import '../../css/k/k3vkrebco.css';
import '../../css/y/y5d_3bbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t0e5e1bzb"/><path class="k3vkrebco"/><path class="y5d_3bbcn"/></g>`,
		"fallback": "hugeicons:home-11",
	});
}

export default Component;
