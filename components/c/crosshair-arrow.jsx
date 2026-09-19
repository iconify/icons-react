import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxnm8cc6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxnm8cc6n"/>`,
		"fallback": "game-icons:crosshair-arrow",
	});
}

export default Component;
