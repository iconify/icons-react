import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ie9tjobji.css';
import '../../css/b/bd-ms75ny.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ie9tjobji"/><path class="bd-ms75ny"/></g>`,
		"fallback": "fluent-emoji-high-contrast:house-with-garden",
	});
}

export default Component;
