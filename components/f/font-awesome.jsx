import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktmk6lb-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktmk6lb-s"/>`,
		"fallback": "fa6-solid:font-awesome",
	});
}

export default Component;
