import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2g2lsb9m.css';
import '../../css/m/mtu1vpnwi.css';
import '../../css/i/ixhn8z3gi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n2g2lsb9m"/><path class="mtu1vpnwi"/><path class="ixhn8z3gi"/></g>`,
		"fallback": "glyphs:battery-50-duo",
	});
}

export default Component;
