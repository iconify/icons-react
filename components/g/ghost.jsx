import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqfno6r6l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqfno6r6l"/>`,
		"fallback": "cib:ghost",
	});
}

export default Component;
