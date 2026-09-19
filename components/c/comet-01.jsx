import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l49cajcsc.css';
import '../../css/n/n_jlqcbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l49cajcsc"/><path class="n_jlqcbzk"/></g>`,
		"fallback": "hugeicons:comet-01",
	});
}

export default Component;
