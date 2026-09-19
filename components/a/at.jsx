import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhvm94b4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhvm94b4z"/>`,
		"fallback": "fa6-solid:at",
	});
}

export default Component;
