import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi-1inbbs.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi-1inbbs"/>`,
		"fallback": "fa6-solid:dumpster",
	});
}

export default Component;
