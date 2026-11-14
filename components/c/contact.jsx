import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kkeo9r8ft.css';
import '../../css/m/mfqp13bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kkeo9r8ft"/><path class="mfqp13bka"/></g>`,
		"fallback": "hugeicons:contact",
	});
}

export default Component;
