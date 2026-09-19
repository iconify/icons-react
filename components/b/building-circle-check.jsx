import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atou-fymc.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atou-fymc"/>`,
		"fallback": "fa6-solid:building-circle-check",
	});
}

export default Component;
