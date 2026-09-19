import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhp8qcbwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhp8qcbwr"/>`,
		"fallback": "cil:baseball",
	});
}

export default Component;
