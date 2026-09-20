import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uq_tkdukn.css';
import '../../css/c/cgy2znb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="uq_tkdukn"/><path class="cgy2znb4u"/></g>`,
		"fallback": "keyline-icons:cake-sharp-fill",
	});
}

export default Component;
