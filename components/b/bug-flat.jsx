import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ip64nl_0o.css';
import '../../css/u/u2tnamwfv.css';
import '../../css/g/g5didnbxe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ip64nl_0o"/><path class="u2tnamwfv"/><path class="g5didnbxe"/></g>`,
		"fallback": "streamline-plump-color:bug-flat",
	});
}

export default Component;
