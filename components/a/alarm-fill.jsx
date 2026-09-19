import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rhdob0q5v.css';
import '../../css/x/xli-_5yuc.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rhdob0q5v"/><path class="xli-_5yuc"/></g>`,
		"fallback": "gravity-ui:alarm-fill",
	});
}

export default Component;
