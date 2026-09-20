import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz-b1_byn.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz-b1_byn"/>`,
		"fallback": "picon:cpp",
	});
}

export default Component;
