import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj4jwx_5u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj4jwx_5u"/>`,
		"fallback": "picon:drink",
	});
}

export default Component;
