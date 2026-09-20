import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gsmehab_t.css';
import '../../css/z/z87jznbuv.css';
import '../../css/c/chmyan-ue.css';

const viewBox = {"width":175,"height":129};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGmaVfydlr)" class="cuyn6tgcc"><path class="gsmehab_t"/><path class="z87jznbuv"/></g><defs><clipPath id="SVGmaVfydlr"><path class="chmyan-ue"/></clipPath></defs></g>`,
		"fallback": "thesvg:affirm",
	});
}

export default Component;
