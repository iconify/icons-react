import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xbeaylbfx.css';
import '../../css/a/arkl93b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xbeaylbfx"/><path class="arkl93b2v"/></g>`,
		"fallback": "coolicons:baby-duocolor-round",
	});
}

export default Component;
