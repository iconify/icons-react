import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaxx-ccaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaxx-ccaf"/>`,
		"fallback": "noviair-light:globe-check",
	});
}

export default Component;
