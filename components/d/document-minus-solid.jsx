import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1diygbis.css';
import '../../css/u/ui7z5xbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f1diygbis"/><path class="ui7z5xbyc"/></g>`,
		"fallback": "heroicons:document-minus-solid",
	});
}

export default Component;
