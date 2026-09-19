import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwup2nbmp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwup2nbmp"/>`,
		"fallback": "ion:alert-sharp",
	});
}

export default Component;
