import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/w9ogbnh2c.css';
import '../../css/z/zce-esbct.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="w9ogbnh2c"/><path class="zce-esbct"/></g>`,
		"fallback": "streamline-plump:fill-and-sign",
	});
}

export default Component;
