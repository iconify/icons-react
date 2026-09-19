import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h0h-7f67v.css';
import '../../css/u/uf_dkyprn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h0h-7f67v"/><path class="uf_dkyprn"/></g>`,
		"fallback": "healthicons:i-documents-accepted",
	});
}

export default Component;
