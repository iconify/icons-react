import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pyidfrbey.css';
import '../../css/s/sj2cr0ecg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pyidfrbey"/><path class="sj2cr0ecg"/></g>`,
		"fallback": "pullo:image-slash-duotone",
	});
}

export default Component;
