import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lg1kgyb4c.css';
import '../../css/k/k91eoacry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lg1kgyb4c"/><path class="k91eoacry"/></g>`,
		"fallback": "humbleicons:book",
	});
}

export default Component;
