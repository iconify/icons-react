import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kuvn8txtx.css';
import '../../css/c/ce1q6jn_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kuvn8txtx"/><path class="ce1q6jn_i"/></g>`,
		"fallback": "hugeicons:insert-column",
	});
}

export default Component;
