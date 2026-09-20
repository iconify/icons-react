import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/a/a2oe27btl.css';
import '../../css/n/nuzvfybet.css';
import '../../css/i/idkyqjb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="a2oe27btl"/><path class="nuzvfybet"/><path class="idkyqjb4q"/></g>`,
		"fallback": "solar:euro-linear",
	});
}

export default Component;
