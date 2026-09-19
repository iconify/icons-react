import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiv1pnq9g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiv1pnq9g"/>`,
		"fallback": "ion:clipboard-sharp",
	});
}

export default Component;
