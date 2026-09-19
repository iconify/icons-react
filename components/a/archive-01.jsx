import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t8h7-ewjn.css';
import '../../css/u/u2pzo1b5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t8h7-ewjn"/><path class="u2pzo1b5m"/></g>`,
		"fallback": "hugeicons:archive-01",
	});
}

export default Component;
