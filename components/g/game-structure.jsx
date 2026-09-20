import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m05bd9i9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m05bd9i9h"/>`,
		"fallback": "uil:game-structure",
	});
}

export default Component;
