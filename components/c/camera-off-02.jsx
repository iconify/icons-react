import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t17c4-btv.css';
import '../../css/k/kc3gejgaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t17c4-btv"/><path class="kc3gejgaa"/></g>`,
		"fallback": "hugeicons:camera-off-02",
	});
}

export default Component;
