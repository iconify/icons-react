import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j-ptpwbrg.css';
import '../../css/n/n47ojwbqw.css';
import '../../css/q/q189_o4mw.css';
import '../../css/r/rda-3cd8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j-ptpwbrg"/><path class="n47ojwbqw"/><path class="q189_o4mw"/><path class="rda-3cd8b"/></g>`,
		"fallback": "streamline-freehand:e-commerce-online-shop",
	});
}

export default Component;
