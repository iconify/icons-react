import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqndebbwd.css';
import '../../css/d/d3236htcp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqndebbwd"/><path class="d3236htcp"/>`,
		"fallback": "ion:bonfire-sharp",
	});
}

export default Component;
