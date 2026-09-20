import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3p3xybsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3p3xybsi"/>`,
		"fallback": "reicon:heart-off-filled",
	});
}

export default Component;
