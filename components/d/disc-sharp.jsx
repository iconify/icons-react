import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1bg4hbvb.css';
import '../../css/i/i5e6rm6wc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a1bg4hbvb"/><path class="i5e6rm6wc"/>`,
		"fallback": "famicons:disc-sharp",
	});
}

export default Component;
