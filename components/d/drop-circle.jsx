import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r7m5yubus.css';
import '../../css/j/j7qjn6psg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r7m5yubus"/><path class="j7qjn6psg"/></g>`,
		"fallback": "tabler:drop-circle",
	});
}

export default Component;
