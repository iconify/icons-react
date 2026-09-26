import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-nnewsmh.css';
import '../../css/v/v1qidhgnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a-nnewsmh"/><path class="v1qidhgnc"/></g>`,
		"fallback": "solar:copy-close-bold",
	});
}

export default Component;
