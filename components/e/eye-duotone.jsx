import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wmcw7kbju.css';
import '../../css/x/xt31cgyzz.css';
import '../../css/k/kjbt3bbno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wmcw7kbju"/><path class="xt31cgyzz"/><circle class="kjbt3bbno"/></g>`,
		"fallback": "lets-icons:eye-duotone",
	});
}

export default Component;
