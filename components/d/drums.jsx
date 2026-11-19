import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/he2wsspks.css';
import '../../css/q/q2ilpbcor.css';
import '../../css/e/ewrhup5ed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="he2wsspks"/><ellipse class="q2ilpbcor"/><path class="ewrhup5ed"/></g>`,
		"fallback": "andrsrxn:drums",
	});
}

export default Component;
