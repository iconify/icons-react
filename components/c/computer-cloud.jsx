import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/srxhvabsx.css';
import '../../css/z/zq2r4k_hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="srxhvabsx"/><path class="zq2r4k_hc"/></g>`,
		"fallback": "hugeicons:computer-cloud",
	});
}

export default Component;
