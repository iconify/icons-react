import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rttjr7b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rttjr7b7v"/>`,
		"fallback": "noviair-light:book-open-check",
	});
}

export default Component;
