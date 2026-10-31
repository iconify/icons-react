import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fz2nvgbzv.css';
import '../../css/z/zdtrt-gil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fz2nvgbzv"/><path class="zdtrt-gil"/></g>`,
		"fallback": "coolicons:grid-bulk-round",
	});
}

export default Component;
