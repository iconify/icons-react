import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq6rz04dx.css';
import '../../css/z/zadk2fo7c.css';
import '../../css/u/u704f14wn.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq6rz04dx"/><path class="zadk2fo7c"/><path class="u704f14wn"/>`,
		"fallback": "iwwa:file-png",
	});
}

export default Component;
