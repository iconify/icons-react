import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b1e4swiah.css';
import '../../css/c/ca_pih7in.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b1e4swiah"/><path class="ca_pih7in"/></g>`,
		"fallback": "bi:calendar2-week",
	});
}

export default Component;
