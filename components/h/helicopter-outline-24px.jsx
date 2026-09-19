import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k65_mebyq.css';
import '../../css/u/u1oxeqb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k65_mebyq"/><path class="u1oxeqb7f"/></g>`,
		"fallback": "healthicons:helicopter-outline-24px",
	});
}

export default Component;
