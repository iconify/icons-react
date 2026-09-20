import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hl659uogt.css';
import '../../css/x/xi0wytc-t.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hl659uogt"/><path class="xi0wytc-t"/></g>`,
		"fallback": "iwwa:file-pdf",
	});
}

export default Component;
