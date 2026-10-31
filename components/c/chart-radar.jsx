import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x796-ibjq.css';
import '../../css/p/p9q1s25cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x796-ibjq"/><path class="p9q1s25cr"/></g>`,
		"fallback": "vadivam:chart-radar",
	});
}

export default Component;
