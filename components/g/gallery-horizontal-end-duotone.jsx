import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qkqlybmds.css';
import '../../css/a/a2wt9tb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qkqlybmds"/><path class="a2wt9tb9c"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-end-duotone",
	});
}

export default Component;
