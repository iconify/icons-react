import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/efyrmtbde.css';
import '../../css/u/u_07p0rbf.css';
import '../../css/i/ilf33kbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="efyrmtbde"/><path class="u_07p0rbf"/><path class="ilf33kbod"/></g>`,
		"fallback": "tabler:calendar-clock",
	});
}

export default Component;
