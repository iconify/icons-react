import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7i38m_6u.css';
import '../../css/m/m_sph4bed.css';
import '../../css/y/y9m5zgczg.css';
import '../../css/c/cm5vxheyp.css';
import '../../css/d/d40p4u52t.css';
import '../../css/x/x7np1jbhm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p7i38m_6u"/><path clip-rule="evenodd" class="m_sph4bed"/><path class="y9m5zgczg"/><path class="cm5vxheyp"/><path class="d40p4u52t"/><path class="x7np1jbhm"/></g>`,
		"fallback": "streamline-color:ice-cream-3",
	});
}

export default Component;
