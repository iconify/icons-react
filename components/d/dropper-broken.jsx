import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ik-3qexjt.css';
import '../../css/u/uhfh519di.css';
import '../../css/m/msronwbal.css';
import '../../css/p/p02ebtb5t.css';
import '../../css/b/b26f9obxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ik-3qexjt"/><path class="uhfh519di"/><path class="msronwbal"/><path class="p02ebtb5t"/><path class="b26f9obxl"/></g>`,
		"fallback": "solar:dropper-broken",
	});
}

export default Component;
