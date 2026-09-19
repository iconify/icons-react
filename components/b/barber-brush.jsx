import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hwgjwbc3o.css';
import '../../css/w/w-ga6iwfh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hwgjwbc3o"/><path class="w-ga6iwfh"/></g>`,
		"fallback": "icon-park-solid:barber-brush",
	});
}

export default Component;
