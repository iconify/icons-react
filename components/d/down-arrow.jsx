import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq1aprlew.css';
import '../../css/l/l2uzblb1r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq1aprlew"/><path class="l2uzblb1r"/>`,
		"fallback": "openmoji:down-arrow",
	});
}

export default Component;
