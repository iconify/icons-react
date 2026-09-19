import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6d2y6bir.css';
import '../../css/x/x1kizjb8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6d2y6bir"/><path class="x1kizjb8a"/>`,
		"fallback": "ion:document-lock-sharp",
	});
}

export default Component;
