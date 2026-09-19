import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mheic9b5o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mheic9b5o"/>`,
		"fallback": "ps:guy-cry",
	});
}

export default Component;
