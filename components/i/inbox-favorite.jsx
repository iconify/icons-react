import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emu-7v7ar.css';
import '../../css/o/od-yz7gaj.css';
import '../../css/y/ytjb6mb-l.css';
import '../../css/n/nmg90_b5o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="emu-7v7ar"/><path class="od-yz7gaj"/><path class="ytjb6mb-l"/><path class="nmg90_b5o"/></g>`,
		"fallback": "streamline-color:inbox-favorite",
	});
}

export default Component;
