import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kmnr8jx4o.css';
import '../../css/j/j8fzk2b-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="kmnr8jx4o"/><path class="j8fzk2b-p"/></g>`,
		"fallback": "hugeicons:circle-arrow-left-right",
	});
}

export default Component;
