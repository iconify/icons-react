import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u6c_mxbde.css';
import '../../css/z/za799wbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u6c_mxbde"/><path class="za799wbjz"/></g>`,
		"fallback": "coolicons:hard-hat-duocolor-round",
	});
}

export default Component;
