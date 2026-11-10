import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nn1bkfbww.css';
import '../../css/o/outwenf4g.css';
import '../../css/c/chiy8bbjq.css';
import '../../css/s/sgxoqfbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nn1bkfbww"/><path class="outwenf4g"/><path class="chiy8bbjq"/><path class="sgxoqfbpv"/></g>`,
		"fallback": "andrsrxn:device-laptop-warning",
	});
}

export default Component;
