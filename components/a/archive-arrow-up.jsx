import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k3fjxabte.css';
import '../../css/w/w2fjagbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k3fjxabte"/><path class="w2fjagbrz"/></g>`,
		"fallback": "hugeicons:archive-arrow-up",
	});
}

export default Component;
