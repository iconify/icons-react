import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7hn-9ncr.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7hn-9ncr"/>`,
		"fallback": "zmdi:grid",
	});
}

export default Component;
