import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubs-d4r4c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubs-d4r4c"/>`,
		"fallback": "fa-solid:chevron-circle-up",
	});
}

export default Component;
