import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/c/c-elrgb8n.css';
import '../../css/n/nw9mp7bns.css';
import '../../css/t/t355hjgxb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="c-elrgb8n"/><path class="nw9mp7bns"/><path class="t355hjgxb"/></g>`,
		"fallback": "icon-park:full-selection",
	});
}

export default Component;
