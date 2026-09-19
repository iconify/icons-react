import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uxdwchstq.css';
import '../../css/i/ikqvnnbxe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="uxdwchstq"/><circle class="ikqvnnbxe"/></g>`,
		"fallback": "icon-park-solid:direction-adjustment-two",
	});
}

export default Component;
