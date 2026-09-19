import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf2q0k68c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf2q0k68c"/>`,
		"fallback": "file-icons:byond",
	});
}

export default Component;
