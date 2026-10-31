import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vd5e6cbev.css';
import '../../css/r/r93gjnbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vd5e6cbev"/><path class="r93gjnbas"/></g>`,
		"fallback": "coolicons:chart-sparkle-duocolor-round",
	});
}

export default Component;
