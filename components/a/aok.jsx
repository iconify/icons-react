import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud9xtmhvv.css';
import '../../css/m/mxpx1okuh.css';
import '../../css/w/w_fsjlwse.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud9xtmhvv"/><path class="mxpx1okuh"/><path class="w_fsjlwse"/>`,
		"fallback": "fxemoji:aok",
	});
}

export default Component;
