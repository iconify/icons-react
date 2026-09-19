import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eja77yp7h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eja77yp7h"/>`,
		"fallback": "carbon:gateway-parallel",
	});
}

export default Component;
