import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwss-ebkl.css';
import '../../css/b/bd5wmoffp.css';
import '../../css/q/qdq3nabuw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwss-ebkl"/><path class="bd5wmoffp"/><path class="qdq3nabuw"/>`,
		"fallback": "fxemoji:collision",
	});
}

export default Component;
