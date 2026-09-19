import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x3vnsgs5a.css';
import '../../css/e/ey8natb0t.css';
import '../../css/o/ohq0abc_u.css';
import '../../css/x/x3z3h4xyh.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGXv8lpc2Y)" class="cuyn6tgcc"><path class="x3vnsgs5a"/><path class="ey8natb0t"/><path class="ohq0abc_u"/><path class="x3z3h4xyh"/></g><defs><clipPath id="SVGXv8lpc2Y"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "grommet-icons:google-pay",
	});
}

export default Component;
