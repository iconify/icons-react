import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c09o6msef.css';
import '../../css/l/l8j1q_y9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="c09o6msef"/><path class="l8j1q_y9i"/></g>`,
		"fallback": "meteor-icons:bilibili",
	});
}

export default Component;
