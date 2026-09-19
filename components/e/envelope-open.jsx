import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y864t2bby.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y864t2bby"/>`,
		"fallback": "fa-solid:envelope-open",
	});
}

export default Component;
