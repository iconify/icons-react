import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xrdnaxb7e.css';
import '../../css/s/s_dekibqu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xrdnaxb7e"/><path class="s_dekibqu"/></g>`,
		"fallback": "gravity-ui:broom-motion",
	});
}

export default Component;
