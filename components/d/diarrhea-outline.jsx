import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s84y2xbes.css';
import '../../css/o/o_chobbkh.css';
import '../../css/m/max6-rbtw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s84y2xbes"/><path class="o_chobbkh"/><path clip-rule="evenodd" class="max6-rbtw"/></g>`,
		"fallback": "healthicons:diarrhea-outline",
	});
}

export default Component;
