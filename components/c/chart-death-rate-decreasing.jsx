import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yr9lhub6p.css';
import '../../css/l/l-6s2cixh.css';
import '../../css/t/terzj2bry.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yr9lhub6p"/><path clip-rule="evenodd" class="l-6s2cixh"/><path class="terzj2bry"/></g>`,
		"fallback": "healthicons:chart-death-rate-decreasing",
	});
}

export default Component;
