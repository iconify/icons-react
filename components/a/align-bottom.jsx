import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/ujc2pciob.css';
import '../../css/f/fbyos_bmx.css';
import '../../css/r/rfzuyqbhc.css';
import '../../css/l/lhb_pyb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ujc2pciob wm-shadow"/><path class="fbyos_bmx wm-shadow"/><path class="rfzuyqbhc"/><path class="lhb_pyb5s"/></g>`,
		"fallback": "withicons-brutal:align-bottom",
	});
}

export default Component;
