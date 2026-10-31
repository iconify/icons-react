import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4sgatbsl.css';
import '../../css/z/zddl1obov.css';
import '../../css/u/u5ye6ecby.css';
import '../../css/m/mn1ueztye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z4sgatbsl"/><path clip-rule="evenodd" class="zddl1obov"/><path class="u5ye6ecby"/><path clip-rule="evenodd" class="mn1ueztye"/></g>`,
		"fallback": "healthicons:constipation-outline",
	});
}

export default Component;
