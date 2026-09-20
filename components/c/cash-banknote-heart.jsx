import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gltnrq7qe.css';
import '../../css/i/i6ye4mbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gltnrq7qe"/><path class="i6ye4mbjs"/></g>`,
		"fallback": "tabler:cash-banknote-heart",
	});
}

export default Component;
