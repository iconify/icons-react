import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/g/gqfwuab_m.css';
import '../../css/o/oz3au1e5x.css';
import '../../css/p/pprr0rbxr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="gqfwuab_m"/><path class="oz3au1e5x"/><path class="pprr0rbxr"/></g>`,
		"fallback": "streamline-plump:code-monitor-2",
	});
}

export default Component;
