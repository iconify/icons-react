import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kkgqdibtc.css';
import '../../css/c/comurw1ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kkgqdibtc"/><path class="comurw1ry"/></g>`,
		"fallback": "hugeicons:bandage",
	});
}

export default Component;
