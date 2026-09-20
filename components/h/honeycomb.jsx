import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9qu2hl1q.css';

const viewBox = {"width":50.6,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9qu2hl1q"/>`,
		"fallback": "thesvg:honeycomb",
	});
}

export default Component;
