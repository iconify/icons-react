import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e8ks3xb3r.css';
import '../../css/m/m4f1sac4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e8ks3xb3r"/><path class="m4f1sac4q"/></g>`,
		"fallback": "hugeicons:calendar-date-1",
	});
}

export default Component;
