import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xb4g0c2rn.css';
import '../../css/v/vbvsif9de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xb4g0c2rn"/><path class="vbvsif9de"/></g>`,
		"fallback": "hugeicons:ai-sheets",
	});
}

export default Component;
