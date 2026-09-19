import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o_ljcrz_n.css';
import '../../css/w/wfd123b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o_ljcrz_n"/><path class="wfd123b6b"/></g>`,
		"fallback": "hugeicons:hold-locked-02",
	});
}

export default Component;
