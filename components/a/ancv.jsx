import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/akazahtxx.css';
import '../../css/y/yn86e6kjd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="akazahtxx"/><path clip-rule="evenodd" class="yn86e6kjd"/></g>`,
		"fallback": "healthicons:ancv",
	});
}

export default Component;
