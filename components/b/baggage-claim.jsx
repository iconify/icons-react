import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fbu79dbdv.css';
import '../../css/e/enqzwbcfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fbu79dbdv"/><path class="enqzwbcfk"/></g>`,
		"fallback": "vadivam:baggage-claim",
	});
}

export default Component;
