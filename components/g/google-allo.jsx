import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0jv209hv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0jv209hv"/>`,
		"fallback": "cib:google-allo",
	});
}

export default Component;
