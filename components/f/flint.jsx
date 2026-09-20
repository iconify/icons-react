import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me1w258bl.css';
import '../../css/e/e0ia1ccfv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me1w258bl"/><path class="e0ia1ccfv"/>`,
		"fallback": "selfhst:flint",
	});
}

export default Component;
