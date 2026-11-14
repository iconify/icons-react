import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nhefkhh7c.css';
import '../../css/v/v6my4yeca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nhefkhh7c"/><path class="v6my4yeca"/></g>`,
		"fallback": "struq:heart",
	});
}

export default Component;
