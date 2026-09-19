import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-scc5p3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-scc5p3s"/>`,
		"fallback": "cil:browser",
	});
}

export default Component;
