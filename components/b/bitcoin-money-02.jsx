import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cy2bjt61c.css';
import '../../css/m/mubborb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cy2bjt61c"/><path class="mubborb8v"/></g>`,
		"fallback": "hugeicons:bitcoin-money-02",
	});
}

export default Component;
