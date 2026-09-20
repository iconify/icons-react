import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2p3ih6-b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2p3ih6-b"/>`,
		"fallback": "la:hdd-solid",
	});
}

export default Component;
