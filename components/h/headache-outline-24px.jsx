import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jpdsq4bdv.css';
import '../../css/g/gnba8qb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jpdsq4bdv"/><path class="gnba8qb0a"/></g>`,
		"fallback": "healthicons:headache-outline-24px",
	});
}

export default Component;
