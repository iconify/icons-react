import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srqj-b-6a.css';
import '../../css/q/qncv2452o.css';
import '../../css/b/b6_5vzbye.css';
import '../../css/u/u8g062bad.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="srqj-b-6a"/><path class="qncv2452o"/><path clip-rule="evenodd" class="b6_5vzbye"/><path class="u8g062bad"/></g>`,
		"fallback": "healthicons:i-schedule-school-date-time-outline",
	});
}

export default Component;
