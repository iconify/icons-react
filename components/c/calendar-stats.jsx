import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zkp37obzb.css';
import '../../css/o/oe0hep0lg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zkp37obzb"/><path class="oe0hep0lg"/></g>`,
		"fallback": "tabler:calendar-stats",
	});
}

export default Component;
