import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/briar8btq.css';
import '../../css/g/gsysomb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="briar8btq"/><path class="gsysomb_d"/></g>`,
		"fallback": "coolicons:currency-dollar-duocolor-round",
	});
}

export default Component;
