import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a810woxuh.css';
import '../../css/y/yrkmgwb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a810woxuh"/><path class="yrkmgwb6h"/></g>`,
		"fallback": "hugeicons:camera-add-02",
	});
}

export default Component;
