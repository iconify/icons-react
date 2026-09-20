import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujg3d-b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujg3d-b3c"/>`,
		"fallback": "keyline-icons:hand-pointer-left",
	});
}

export default Component;
