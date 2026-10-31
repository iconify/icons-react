import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x-d5t_gmw.css';
import '../../css/n/nsjv8-svv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x-d5t_gmw"/><path class="nsjv8-svv"/></g>`,
		"fallback": "coolicons:car-side-duocolor-round",
	});
}

export default Component;
