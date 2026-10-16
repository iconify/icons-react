import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7g5w-bhc.css';
import '../../css/q/qu_-3cc-k.css';
import '../../css/u/urw0m8b-p.css';

const viewBox = {"width":360,"height":360};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7g5w-bhc"/><path class="qu_-3cc-k"/><path class="urw0m8b-p"/>`,
		"fallback": "thesvg-color:contour-dark",
	});
}

export default Component;
