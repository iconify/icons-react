import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyd4zipmp.css';
import '../../css/a/a2kx7ib2v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pyd4zipmp"/><path clip-rule="evenodd" class="a2kx7ib2v"/></g>`,
		"fallback": "streamline-plump-color:change-background-transparent-flat",
	});
}

export default Component;
