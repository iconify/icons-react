import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7w8ann-p.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7w8ann-p"/>`,
		"fallback": "fa6-brands:earlybirds",
	});
}

export default Component;
