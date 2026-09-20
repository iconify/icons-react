import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/y/yst9ccckc.css';
import '../../css/n/n-a01004m.css';
import '../../css/y/y_681ib7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="yst9ccckc"/><path class="n-a01004m"/><path class="y_681ib7q"/></g>`,
		"fallback": "streamline-kameleon-color:filter",
	});
}

export default Component;
