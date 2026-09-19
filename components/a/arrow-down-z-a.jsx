import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de6mm3bss.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de6mm3bss"/>`,
		"fallback": "fa6-solid:arrow-down-z-a",
	});
}

export default Component;
