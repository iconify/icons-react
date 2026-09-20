import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dworj5m2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dworj5m2d"/>`,
		"fallback": "solar:bonfire-outline",
	});
}

export default Component;
