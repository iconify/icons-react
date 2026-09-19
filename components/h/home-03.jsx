import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gv2q46bih.css';
import '../../css/y/y5d_3bbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gv2q46bih"/><path class="y5d_3bbcn"/></g>`,
		"fallback": "hugeicons:home-03",
	});
}

export default Component;
