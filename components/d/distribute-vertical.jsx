import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lgr81ibil.css';
import '../../css/r/r38l4izhx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lgr81ibil"/><path class="r38l4izhx"/></g>`,
		"fallback": "bi:distribute-vertical",
	});
}

export default Component;
