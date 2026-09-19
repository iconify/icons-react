import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n71rvzb2c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n71rvzb2c"/>`,
		"fallback": "fa7-brands:dashcube",
	});
}

export default Component;
