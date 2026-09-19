import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dts-kxr-c.css';
import '../../css/r/r7ts6o96m.css';

const viewBox = {"width":38,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dts-kxr-c"/><path class="r7ts6o96m"/></g>`,
		"fallback": "et:briefcase",
	});
}

export default Component;
