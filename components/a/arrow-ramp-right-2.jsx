import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fww_fhyog.css';
import '../../css/w/w4-pnibuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fww_fhyog"/><path class="w4-pnibuw"/></g>`,
		"fallback": "tabler:arrow-ramp-right-2",
	});
}

export default Component;
