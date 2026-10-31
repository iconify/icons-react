import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g80ayrb0p.css';
import '../../css/e/egrrbrz0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g80ayrb0p wm-k"/><path class="egrrbrz0p wm-a"/></g>`,
		"fallback": "withicons:chart-column-stacked-gloss",
	});
}

export default Component;
