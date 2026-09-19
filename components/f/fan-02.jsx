import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c003g6-7h.css';
import '../../css/u/u19fzjjnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c003g6-7h"/><path class="u19fzjjnv"/></g>`,
		"fallback": "hugeicons:fan-02",
	});
}

export default Component;
