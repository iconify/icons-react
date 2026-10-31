import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vqyt1wbnn.css';
import '../../css/a/ad4nnacmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vqyt1wbnn"/><path class="ad4nnacmk"/></g>`,
		"fallback": "coolicons:file-upload-bulk-round",
	});
}

export default Component;
