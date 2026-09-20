import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/j/jviuwz32c.css';
import '../../css/u/ud7hor17k.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="jviuwz32c"/><path class="ud7hor17k"/></g>`,
		"fallback": "system-uicons:cube",
	});
}

export default Component;
