import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3__s4b5c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3__s4b5c"/>`,
		"fallback": "file-icons:font-bitmap",
	});
}

export default Component;
