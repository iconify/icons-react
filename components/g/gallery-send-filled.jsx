import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fr-facb1r.css';
import '../../css/w/wy3fohb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fr-facb1r"/><path clip-rule="evenodd" class="wy3fohb_l"/></g>`,
		"fallback": "reicon:gallery-send-filled",
	});
}

export default Component;
