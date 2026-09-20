import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fo8tuabtk.css';
import '../../css/q/qvg2egx2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fo8tuabtk"/><path class="qvg2egx2p"/></g>`,
		"fallback": "mage:focus",
	});
}

export default Component;
