import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm4pw3bvr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm4pw3bvr"/>`,
		"fallback": "fa6-solid:comments-dollar",
	});
}

export default Component;
