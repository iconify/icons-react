import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6cvwtbsp.css';
import '../../css/n/nw87p9b0z.css';
import '../../css/j/j9-dsob8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6cvwtbsp"/><path class="nw87p9b0z"/><path class="j9-dsob8b"/>`,
		"fallback": "energy-icons:canal-lock-48-bold",
	});
}

export default Component;
