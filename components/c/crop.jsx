import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rrlausb-z.css';
import '../../css/g/g9w_9jwwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rrlausb-z"/><path class="g9w_9jwwo"/></g>`,
		"fallback": "feather:crop",
	});
}

export default Component;
