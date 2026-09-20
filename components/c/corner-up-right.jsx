import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl-eebb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl-eebb0u"/>`,
		"fallback": "uim:corner-up-right",
	});
}

export default Component;
