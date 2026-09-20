import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/s/sd5y_0n2e.css';
import '../../css/g/gqtvblinr.css';
import '../../css/j/juwnamoml.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="sd5y_0n2e"/><path class="gqtvblinr"/><path class="juwnamoml"/></g>`,
		"fallback": "system-uicons:boxes",
	});
}

export default Component;
