import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/mkawfsbkt.css';
import '../../css/n/nz3hu6bdm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="mkawfsbkt"/><path class="nz3hu6bdm"/></g>`,
		"fallback": "streamline-plump:graduation-cap",
	});
}

export default Component;
