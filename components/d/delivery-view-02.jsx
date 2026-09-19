import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nzielpk-o.css';
import '../../css/z/z2dlrvbcn.css';
import '../../css/w/wx9jn1bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nzielpk-o"/><path class="z2dlrvbcn"/><path class="wx9jn1bne"/></g>`,
		"fallback": "hugeicons:delivery-view-02",
	});
}

export default Component;
