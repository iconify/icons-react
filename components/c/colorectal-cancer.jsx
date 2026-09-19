import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0vex97qs.css';
import '../../css/p/ppna39b1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o0vex97qs"/><path class="ppna39b1h"/></g>`,
		"fallback": "healthicons:colorectal-cancer",
	});
}

export default Component;
