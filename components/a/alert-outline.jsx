import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_6t34bzh.css';
import '../../css/x/x-ff3h11f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_6t34bzh"/><circle class="x-ff3h11f"/>`,
		"fallback": "ion:alert-outline",
	});
}

export default Component;
