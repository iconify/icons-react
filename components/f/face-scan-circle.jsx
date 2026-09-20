import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b48ai4vmc.css';
import '../../css/j/jmfdxk1zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b48ai4vmc"/><path clip-rule="evenodd" class="jmfdxk1zt"/></g>`,
		"fallback": "reicon:face-scan-circle",
	});
}

export default Component;
