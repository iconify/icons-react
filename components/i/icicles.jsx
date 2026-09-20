import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpz9ytm9t.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpz9ytm9t"/>`,
		"fallback": "picon:icicles",
	});
}

export default Component;
