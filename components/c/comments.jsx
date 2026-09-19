import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4sxp5bld.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4sxp5bld"/>`,
		"fallback": "fa-regular:comments",
	});
}

export default Component;
