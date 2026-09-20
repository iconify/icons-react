import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vy973jzih.css';
import '../../css/s/sotccjbfo.css';
import '../../css/s/sklx66bfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vy973jzih"/><path class="sotccjbfo"/><circle class="sklx66bfy"/></g>`,
		"fallback": "mage:box-3d-notification",
	});
}

export default Component;
