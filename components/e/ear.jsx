import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5ka5taof.css';
import '../../css/e/euew-kxvf.css';
import '../../css/p/pdut19b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5ka5taof"/><path class="euew-kxvf"/><path class="pdut19b3h"/></g>`,
		"fallback": "andrsrxn:ear",
	});
}

export default Component;
