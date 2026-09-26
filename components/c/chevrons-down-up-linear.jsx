import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fybv11bra.css';
import '../../css/f/fsd93ib2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fybv11bra"/><path class="fsd93ib2q"/></g>`,
		"fallback": "solar:chevrons-down-up-linear",
	});
}

export default Component;
