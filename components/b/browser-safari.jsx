import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8nrbqb1t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8nrbqb1t"/>`,
		"fallback": "bi:browser-safari",
	});
}

export default Component;
