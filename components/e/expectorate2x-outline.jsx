import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/huc8kob5d.css';
import '../../css/t/tydibpbng.css';
import '../../css/i/iv1ga_uim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="huc8kob5d"/><path clip-rule="evenodd" class="tydibpbng"/><path class="iv1ga_uim"/></g>`,
		"fallback": "healthicons:expectorate2x-outline",
	});
}

export default Component;
