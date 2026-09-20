import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fk5bzrb7k.css';
import '../../css/w/w5h2vxzei.css';
import '../../css/g/gx1t0kb3n.css';
import '../../css/o/oaodfzbce.css';
import '../../css/m/ml2te2bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fk5bzrb7k"/><path class="w5h2vxzei"/><path class="gx1t0kb3n"/><path class="oaodfzbce"/><path class="ml2te2bsu"/></g>`,
		"fallback": "streamline-cyber-color:account-lock",
	});
}

export default Component;
