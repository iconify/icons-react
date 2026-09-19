import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfqe5lbwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfqe5lbwr"/>`,
		"fallback": "cil:arrow-thick-from-right",
	});
}

export default Component;
