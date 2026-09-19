import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r2c910baj.css';
import '../../css/d/dq4jskbps.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r2c910baj"/><path class="dq4jskbps"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-blowing-a-kiss",
	});
}

export default Component;
