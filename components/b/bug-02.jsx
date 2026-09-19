import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k5vvpgbvu.css';
import '../../css/j/j_swb7bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k5vvpgbvu"/><path class="j_swb7bzu"/></g>`,
		"fallback": "hugeicons:bug-02",
	});
}

export default Component;
