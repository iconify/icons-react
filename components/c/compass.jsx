import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rpxvvzoag.css';
import '../../css/n/nmcrzeajb.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rpxvvzoag"/><path class="nmcrzeajb"/></g>`,
		"fallback": "foundation:compass",
	});
}

export default Component;
