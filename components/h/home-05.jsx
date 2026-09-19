import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gv2q46bih.css';
import '../../css/w/w9gxc91ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gv2q46bih"/><path class="w9gxc91ei"/></g>`,
		"fallback": "hugeicons:home-05",
	});
}

export default Component;
