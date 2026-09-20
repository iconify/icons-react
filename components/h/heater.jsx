import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nv7c-4bph.css';
import '../../css/e/egvay2gnw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="nv7c-4bph"/><path class="egvay2gnw"/></g>`,
		"fallback": "streamline-plump:heater",
	});
}

export default Component;
