import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cgd6e8bux.css';
import '../../css/s/s9yq6kdnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cgd6e8bux"/><path class="s9yq6kdnl"/></g>`,
		"fallback": "si:airplane-alt-duotone",
	});
}

export default Component;
