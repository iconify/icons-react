import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n3_36ub_x.css';
import '../../css/x/xon_9ib8a.css';
import '../../css/y/y4tw4vbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n3_36ub_x"/><path class="xon_9ib8a"/><path class="y4tw4vbye"/></g>`,
		"fallback": "keyline-icons:bell-sparkles-duotone",
	});
}

export default Component;
