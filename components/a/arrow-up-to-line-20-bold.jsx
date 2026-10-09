import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdilgkbdd.css';
import '../../css/f/fqlu4irdr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdilgkbdd"/><path class="fqlu4irdr"/>`,
		"fallback": "energy-icons:arrow-up-to-line-20-bold",
	});
}

export default Component;
