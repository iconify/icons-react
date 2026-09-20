import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/milvkg3cv.css';
import '../../css/f/f7r_-v4is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="milvkg3cv"/><path class="f7r_-v4is"/></g>`,
		"fallback": "lucide:file-volume",
	});
}

export default Component;
