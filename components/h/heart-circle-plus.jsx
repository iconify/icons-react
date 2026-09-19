import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkd7flewn.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkd7flewn"/>`,
		"fallback": "fa6-solid:heart-circle-plus",
	});
}

export default Component;
