import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/ks8iu3b9c.css';
import '../../css/q/qt9tgmrav.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ks8iu3b9c"/><path class="qt9tgmrav"/></g>`,
		"fallback": "streamline-plump:balloon",
	});
}

export default Component;
