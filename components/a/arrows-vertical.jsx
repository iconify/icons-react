import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iyh2aybyj.css';
import '../../css/s/sf5f6kbpj.css';
import '../../css/v/v8n_cvbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iyh2aybyj"/><path class="sf5f6kbpj"/><path class="v8n_cvbxr"/></g>`,
		"fallback": "pixelarticons:arrows-vertical",
	});
}

export default Component;
