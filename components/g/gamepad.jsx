import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdi64yb1u.css';

const viewBox = {"width":24,"height":24,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdi64yb1u"/>`,
		"fallback": "jam:gamepad",
	});
}

export default Component;
