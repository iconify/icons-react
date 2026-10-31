import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/srpel7lyw.css';
import '../../css/x/xw8_zjbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="srpel7lyw"/><path class="xw8_zjbhs"/></g>`,
		"fallback": "coolicons:arrow-right-from-line-duocolor-round",
	});
}

export default Component;
