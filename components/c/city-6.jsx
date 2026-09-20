import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da47x6brt.css';
import '../../css/w/wg72rqbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="da47x6brt"/><path class="wg72rqbsg"/></g>`,
		"fallback": "tdesign:city-6",
	});
}

export default Component;
