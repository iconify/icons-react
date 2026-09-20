import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pl91_tter.css';
import '../../css/x/x1wlzug7e.css';
import '../../css/o/oww92lb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pl91_tter"/><path class="x1wlzug7e"/><path class="oww92lb8o"/></g>`,
		"fallback": "lets-icons:calendar-add-duotone",
	});
}

export default Component;
