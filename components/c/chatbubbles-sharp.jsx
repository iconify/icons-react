import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugoumwb4c.css';
import '../../css/c/cfmtxnb5o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugoumwb4c"/><path class="cfmtxnb5o"/>`,
		"fallback": "ion:chatbubbles-sharp",
	});
}

export default Component;
