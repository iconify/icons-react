import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/v0lxn1b9c.css';
import '../../css/a/asl6e5bkh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="v0lxn1b9c"/><path class="asl6e5bkh"/></g>`,
		"fallback": "streamline-plump:broken-link-2",
	});
}

export default Component;
