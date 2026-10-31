import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g9kb-obzd.css';
import '../../css/r/rzpp9i11x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g9kb-obzd"/><path class="rzpp9i11x"/></g>`,
		"fallback": "coolicons:car-electric-duocolor-round",
	});
}

export default Component;
