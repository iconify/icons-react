import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vzo3ypbps.css';
import '../../css/x/x43s2zn6y.css';
import '../../css/p/pfllnjb4h.css';
import '../../css/t/tb_maib5c.css';
import '../../css/d/dz1ggsbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="vzo3ypbps"/><path class="x43s2zn6y"/><path class="pfllnjb4h"/><path class="tb_maib5c"/><path class="dz1ggsbih"/></g>`,
		"fallback": "solar:alarm-pause-linear",
	});
}

export default Component;
