import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/o/o_eemtw3s.css';
import '../../css/m/mzyopqbdv.css';
import '../../css/y/yhxdwobwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="o_eemtw3s"/><circle transform="rotate(90 7 8)" class="mzyopqbdv"/><circle transform="rotate(90 17 16)" class="yhxdwobwj"/></g>`,
		"fallback": "lets-icons:filter-big",
	});
}

export default Component;
