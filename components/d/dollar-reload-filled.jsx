import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rlom52bda.css';
import '../../css/x/xc2ry88zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rlom52bda"/><path class="xc2ry88zx"/></g>`,
		"fallback": "reicon:dollar-reload-filled",
	});
}

export default Component;
