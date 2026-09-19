import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_a703ueg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_a703ueg"/>`,
		"fallback": "fa-solid:book-reader",
	});
}

export default Component;
