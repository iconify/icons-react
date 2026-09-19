import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpchaaclv.css';
import '../../css/b/b73r8pbxx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpchaaclv"/><path class="b73r8pbxx"/>`,
		"fallback": "carbon:ibm-watson-orders",
	});
}

export default Component;
