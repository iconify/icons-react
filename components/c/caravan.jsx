import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r5wgb97jk.css';
import '../../css/j/j2fbvgb4b.css';
import '../../css/e/ekwl493ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r5wgb97jk"/><path class="j2fbvgb4b"/><path class="ekwl493ik"/></g>`,
		"fallback": "tabler:caravan",
	});
}

export default Component;
