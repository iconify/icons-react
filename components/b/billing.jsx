import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upkyg_b6q.css';
import '../../css/f/fz7rrmbdj.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upkyg_b6q"/><path class="fz7rrmbdj"/>`,
		"fallback": "medical-icon:billing",
	});
}

export default Component;
