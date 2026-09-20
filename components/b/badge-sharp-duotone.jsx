import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxv8z0-zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxv8z0-zc"/>`,
		"fallback": "keyline-icons:badge-sharp-duotone",
	});
}

export default Component;
