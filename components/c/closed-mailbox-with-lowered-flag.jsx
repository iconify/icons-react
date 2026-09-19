import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/st_eo561y.css';
import '../../css/k/ke2f-rpoo.css';
import '../../css/b/b9wl2xisy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="st_eo561y"/><path class="ke2f-rpoo"/><path class="b9wl2xisy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:closed-mailbox-with-lowered-flag",
	});
}

export default Component;
