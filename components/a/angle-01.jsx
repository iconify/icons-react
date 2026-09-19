import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pfpl6hb4u.css';
import '../../css/y/yoggy53-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pfpl6hb4u"/><path class="yoggy53-k"/></g>`,
		"fallback": "hugeicons:angle-01",
	});
}

export default Component;
