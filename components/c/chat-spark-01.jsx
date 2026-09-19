import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ar-yupbfd.css';
import '../../css/k/kc6ikbbzc.css';
import '../../css/a/aua0i6bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ar-yupbfd"/><path class="kc6ikbbzc"/><path class="aua0i6bem"/></g>`,
		"fallback": "hugeicons:chat-spark-01",
	});
}

export default Component;
