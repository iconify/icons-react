import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zdke2vb7y.css';
import '../../css/l/lgyakeb9t.css';
import '../../css/v/vj_pdf_el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zdke2vb7y"/><path class="lgyakeb9t"/><path class="vj_pdf_el"/></g>`,
		"fallback": "mono-icons:circle-help",
	});
}

export default Component;
