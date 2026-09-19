import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r54u05boz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r54u05boz"/>`,
		"fallback": "fa7-solid:house-circle-check",
	});
}

export default Component;
