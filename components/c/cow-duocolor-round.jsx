import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t5bihgohq.css';
import '../../css/q/q9reugbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t5bihgohq"/><path class="q9reugbnb"/></g>`,
		"fallback": "coolicons:cow-duocolor-round",
	});
}

export default Component;
