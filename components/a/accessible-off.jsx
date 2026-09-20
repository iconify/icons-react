import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w44nb-ric.css';
import '../../css/d/d4r6y_19q.css';
import '../../css/c/coej2_bhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w44nb-ric"/><path class="d4r6y_19q"/><path class="coej2_bhe"/></g>`,
		"fallback": "tabler:accessible-off",
	});
}

export default Component;
