import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp2g8gjga.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp2g8gjga"/>`,
		"fallback": "fa-solid:grin-beam",
	});
}

export default Component;
