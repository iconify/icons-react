import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tg2bgx4fn.css';
import '../../css/h/h4jyjhtzw.css';
import '../../css/k/k2y5uhb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="tg2bgx4fn"/><path class="h4jyjhtzw"/><path class="k2y5uhb6o"/></g>`,
		"fallback": "keyline-icons:folder-zip-sharp-duotone",
	});
}

export default Component;
