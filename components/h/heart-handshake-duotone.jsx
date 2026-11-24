import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s57weabhk.css';
import '../../css/m/m3wzrybax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s57weabhk"/><path class="m3wzrybax"/></g>`,
		"fallback": "lucide-extended:heart-handshake-duotone",
	});
}

export default Component;
