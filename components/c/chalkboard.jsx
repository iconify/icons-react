import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evdr_bc-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evdr_bc-e"/>`,
		"fallback": "noviair-light:chalkboard",
	});
}

export default Component;
