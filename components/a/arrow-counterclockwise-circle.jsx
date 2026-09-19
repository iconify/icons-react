import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pspf4cc1c.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pspf4cc1c"/>`,
		"fallback": "f7:arrow-counterclockwise-circle",
	});
}

export default Component;
