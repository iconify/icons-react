import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w5mhbeaux.css';
import '../../css/b/bngjnhb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w5mhbeaux"/><path class="bngjnhb8w"/></g>`,
		"fallback": "hugeicons:estimate-01",
	});
}

export default Component;
