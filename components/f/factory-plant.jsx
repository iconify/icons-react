import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s-yz5mbon.css';
import '../../css/t/t8ld00bkb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="s-yz5mbon"/><path class="t8ld00bkb"/></g>`,
		"fallback": "streamline-plump:factory-plant",
	});
}

export default Component;
