import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjpoq8bet.css';
import '../../css/k/k6b2bbmqa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zjpoq8bet"/><path class="k6b2bbmqa"/></g>`,
		"fallback": "healthicons:hair",
	});
}

export default Component;
