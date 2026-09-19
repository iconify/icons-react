import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/suft8gbjr.css';
import '../../css/i/i6mewxbcc.css';
import '../../css/c/cdx5ar_wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="suft8gbjr"/><circle class="i6mewxbcc"/><path class="cdx5ar_wc"/></g>`,
		"fallback": "hugeicons:car-alert",
	});
}

export default Component;
