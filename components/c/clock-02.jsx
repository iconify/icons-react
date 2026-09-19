import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhhjymb2q.css';
import '../../css/w/w4x4tnb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mhhjymb2q"/><path class="w4x4tnb7k"/></g>`,
		"fallback": "hugeicons:clock-02",
	});
}

export default Component;
