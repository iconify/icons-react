import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/autdh0b_i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="autdh0b_i"/>`,
		"fallback": "selfhst:agam-space-light",
	});
}

export default Component;
