import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/walbv2b5n.css';
import '../../css/r/r6rbcq94k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="walbv2b5n"/><path class="r6rbcq94k"/></g>`,
		"fallback": "keyline-icons:heading-5-two-tone",
	});
}

export default Component;
