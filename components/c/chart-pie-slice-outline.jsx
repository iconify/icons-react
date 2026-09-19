import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w5m88eblv.css';
import '../../css/u/ud3unjb8b.css';
import '../../css/d/d31_4gbvv.css';
import '../../css/f/fxlo5tbrp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w5m88eblv"/><path class="ud3unjb8b"/><path class="d31_4gbvv"/><path class="fxlo5tbrp"/></g>`,
		"fallback": "glyphs:chart-pie-slice-outline",
	});
}

export default Component;
