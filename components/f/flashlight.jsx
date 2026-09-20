import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qokg--b2b.css';
import '../../css/w/w8a--id8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="qokg--b2b"/><path class="w8a--id8n"/></g>`,
		"fallback": "streamline-plump:flashlight",
	});
}

export default Component;
