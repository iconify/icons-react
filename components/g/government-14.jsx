import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovix37yeg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovix37yeg"/>`,
		"fallback": "osmic:government-14",
	});
}

export default Component;
