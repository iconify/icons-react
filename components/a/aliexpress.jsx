import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqxhezb2s.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqxhezb2s"/>`,
		"fallback": "picon:aliexpress",
	});
}

export default Component;
