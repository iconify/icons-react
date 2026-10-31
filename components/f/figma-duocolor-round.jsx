import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ofmul488o.css';
import '../../css/r/r4ig58ryn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ofmul488o"/><path class="r4ig58ryn"/></g>`,
		"fallback": "coolicons:figma-duocolor-round",
	});
}

export default Component;
