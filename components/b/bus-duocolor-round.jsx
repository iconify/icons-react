import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ote8l6-hz.css';
import '../../css/s/sa0lf8bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ote8l6-hz"/><path class="sa0lf8bwy"/></g>`,
		"fallback": "coolicons:bus-duocolor-round",
	});
}

export default Component;
