import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/si8dmxb0q.css';
import '../../css/k/km4h62byp.css';
import '../../css/l/lknytxdlq.css';
import '../../css/b/by61l_1me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="si8dmxb0q"/><path class="km4h62byp"/><path class="lknytxdlq"/><path class="by61l_1me"/></g>`,
		"fallback": "streamline-cyber-color:business-scale-4",
	});
}

export default Component;
