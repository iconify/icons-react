import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgti71m4g.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgti71m4g"/>`,
		"fallback": "picon:fragile",
	});
}

export default Component;
