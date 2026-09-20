import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dcu3-vece.css';
import '../../css/m/mr50r_bjh.css';
import '../../css/f/fzmbgmbjp.css';
import '../../css/u/u_o-feb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dcu3-vece"/><path class="mr50r_bjh"/><path class="fzmbgmbjp"/><path class="u_o-feb_i"/></g>`,
		"fallback": "streamline-freehand-color:currency-dollar-chip",
	});
}

export default Component;
