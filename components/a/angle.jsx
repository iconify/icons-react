import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwxsw6bus.css';
import '../../css/u/uwv24tbgs.css';
import '../../css/o/o6f0wm0oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iwxsw6bus"/><path class="uwv24tbgs"/><path class="o6f0wm0oo"/></g>`,
		"fallback": "andrsrxn:angle",
	});
}

export default Component;
