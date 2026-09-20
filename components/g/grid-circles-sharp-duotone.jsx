import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2_13e-3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2_13e-3j"/>`,
		"fallback": "keyline-icons:grid-circles-sharp-duotone",
	});
}

export default Component;
