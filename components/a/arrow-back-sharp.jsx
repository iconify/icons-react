import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfvo-obul.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfvo-obul"/>`,
		"fallback": "ion:arrow-back-sharp",
	});
}

export default Component;
