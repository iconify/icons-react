import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qozyjrwpt.css';
import '../../css/c/ce1q6jn_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qozyjrwpt"/><path class="ce1q6jn_i"/></g>`,
		"fallback": "hugeicons:delete-column",
	});
}

export default Component;
