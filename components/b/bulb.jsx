import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cdv7p2bhw.css';
import '../../css/o/oaw84acrx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cdv7p2bhw"/><path class="oaw84acrx"/></g>`,
		"fallback": "gravity-ui:bulb",
	});
}

export default Component;
