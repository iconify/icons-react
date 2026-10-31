import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i5dhe1bml.css';
import '../../css/e/eh8r7jx3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i5dhe1bml"/><path class="eh8r7jx3o"/></g>`,
		"fallback": "coolicons:currency-rupee-duocolor-round",
	});
}

export default Component;
