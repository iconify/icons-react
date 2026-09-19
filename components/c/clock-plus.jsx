import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lwgq4-igf.css';
import '../../css/w/w4x4tnb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lwgq4-igf"/><path class="w4x4tnb7k"/></g>`,
		"fallback": "hugeicons:clock-plus",
	});
}

export default Component;
