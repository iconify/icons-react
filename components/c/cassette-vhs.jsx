import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ru0c1ubqm.css';
import '../../css/x/x5bhhcb4p.css';
import '../../css/m/mr4a--b_a.css';
import '../../css/f/f89bribgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ru0c1ubqm"/><path class="x5bhhcb4p"/><path class="mr4a--b_a"/><path class="f89bribgd"/></g>`,
		"fallback": "andrsrxn:cassette-vhs",
	});
}

export default Component;
