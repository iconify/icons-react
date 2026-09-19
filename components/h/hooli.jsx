import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znqa3p1ks.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znqa3p1ks"/>`,
		"fallback": "fa6-brands:hooli",
	});
}

export default Component;
