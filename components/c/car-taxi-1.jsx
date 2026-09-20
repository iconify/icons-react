import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/toxhfac1p.css';
import '../../css/w/wwf59ulvl.css';
import '../../css/n/nxh4k1a_x.css';
import '../../css/c/cw_0nw0sg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="toxhfac1p"/><path class="wwf59ulvl"/><path class="nxh4k1a_x"/><path class="cw_0nw0sg"/></g>`,
		"fallback": "streamline-color:car-taxi-1",
	});
}

export default Component;
