import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hgd1csbih.css';
import '../../css/t/t7088n-xt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hgd1csbih"/><path class="t7088n-xt"/></g>`,
		"fallback": "hugeicons:headphone-off",
	});
}

export default Component;
