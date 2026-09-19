import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/ju9pfcbbq.css';
import '../../css/l/l_982k12n.css';
import '../../css/m/mnx3azbnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ju9pfcbbq"/><path class="l_982k12n"/><path class="mnx3azbnn"/></g>`,
		"fallback": "hugeicons:gps-disconnected",
	});
}

export default Component;
