import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rwv5ytb5v.css';
import '../../css/w/wsrjilphf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rwv5ytb5v"/><path class="wsrjilphf"/></g>`,
		"fallback": "coolicons:filter-off-duocolor-round",
	});
}

export default Component;
