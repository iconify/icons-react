import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnrnkda5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnrnkda5u"/>`,
		"fallback": "withicons:ethernet-port-gloss",
	});
}

export default Component;
