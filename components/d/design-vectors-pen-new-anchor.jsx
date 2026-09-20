import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9xc_ibsf.css';
import '../../css/k/kklcasb7n.css';
import '../../css/w/wumwuos8q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9xc_ibsf"/><path class="kklcasb7n"/><path class="wumwuos8q"/>`,
		"fallback": "streamline-pixel:design-vectors-pen-new-anchor",
	});
}

export default Component;
