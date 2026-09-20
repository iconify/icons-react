import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otza0daer.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otza0daer"/>`,
		"fallback": "selfhst:blinko-light",
	});
}

export default Component;
