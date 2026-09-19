import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pz3scgbdp.css';
import '../../css/v/vy_h11b1c.css';
import '../../css/r/rwivxdqcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="pz3scgbdp"/><path class="vy_h11b1c"/><path class="rwivxdqcz"/></g>`,
		"fallback": "hugeicons:geometric-shapes-02",
	});
}

export default Component;
