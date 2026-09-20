import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bsqqjm9ym.css';
import '../../css/p/p0omb5qxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bsqqjm9ym"/><path class="p0omb5qxl"/></g>`,
		"fallback": "lucide:castle",
	});
}

export default Component;
