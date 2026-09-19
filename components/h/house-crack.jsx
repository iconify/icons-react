import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abb0r1czz.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abb0r1czz"/>`,
		"fallback": "fa6-solid:house-crack",
	});
}

export default Component;
