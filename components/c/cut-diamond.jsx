import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar-8itt_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar-8itt_x"/>`,
		"fallback": "game-icons:cut-diamond",
	});
}

export default Component;
