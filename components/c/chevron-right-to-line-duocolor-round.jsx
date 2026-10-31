import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zpm2iyb0f.css';
import '../../css/n/n1oi4j7xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zpm2iyb0f"/><path class="n1oi4j7xe"/></g>`,
		"fallback": "coolicons:chevron-right-to-line-duocolor-round",
	});
}

export default Component;
