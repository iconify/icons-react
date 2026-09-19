import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x29xhpcfs.css';
import '../../css/e/e5hrx7bil.css';
import '../../css/u/uccg2r8dc.css';
import '../../css/q/qff5zwbcp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x29xhpcfs"/><path class="e5hrx7bil"/><path class="uccg2r8dc"/><path class="qff5zwbcp"/></g>`,
		"fallback": "glyphs:arrow-solid-square-outline",
	});
}

export default Component;
