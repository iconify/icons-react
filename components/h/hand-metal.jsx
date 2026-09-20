import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vw08w4ikn.css';
import '../../css/z/z7ms-ibyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vw08w4ikn"/><path class="z7ms-ibyv"/></g>`,
		"fallback": "lucide:hand-metal",
	});
}

export default Component;
