import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m902blbbv.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m902blbbv"/>`,
		"fallback": "fa6-brands:fedex",
	});
}

export default Component;
