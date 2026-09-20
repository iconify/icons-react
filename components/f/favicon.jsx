import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/quzd0abac.css';
import '../../css/c/c7nu9q8aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="quzd0abac"/><path class="c7nu9q8aq"/></g>`,
		"fallback": "tabler:favicon",
	});
}

export default Component;
