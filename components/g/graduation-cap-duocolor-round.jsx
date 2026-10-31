import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rrgtqqgqc.css';
import '../../css/v/v2agifbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rrgtqqgqc"/><path class="v2agifbex"/></g>`,
		"fallback": "coolicons:graduation-cap-duocolor-round",
	});
}

export default Component;
