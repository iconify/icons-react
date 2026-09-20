import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv_9n7-1w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv_9n7-1w"/>`,
		"fallback": "oui:continuity-within",
	});
}

export default Component;
