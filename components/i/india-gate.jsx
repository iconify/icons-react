import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/serts5kow.css';
import '../../css/p/p8hixpb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="serts5kow"/><path class="p8hixpb1h"/></g>`,
		"fallback": "hugeicons:india-gate",
	});
}

export default Component;
