import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxzi38pia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxzi38pia"/>`,
		"fallback": "bx:bx-bowl-hot",
	});
}

export default Component;
