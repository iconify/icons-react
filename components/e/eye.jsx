import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd_g-pzxl.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd_g-pzxl"/>`,
		"fallback": "picon:eye",
	});
}

export default Component;
