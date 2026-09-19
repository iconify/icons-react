import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdwwqyb0c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdwwqyb0c"/>`,
		"fallback": "cil:image",
	});
}

export default Component;
