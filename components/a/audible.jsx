import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfb0shbls.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfb0shbls"/>`,
		"fallback": "fa-brands:audible",
	});
}

export default Component;
