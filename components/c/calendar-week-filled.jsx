import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c2u3_cb-h.css';
import '../../css/n/nx8145bpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c2u3_cb-h"/><path class="nx8145bpd"/></g>`,
		"fallback": "tabler:calendar-week-filled",
	});
}

export default Component;
