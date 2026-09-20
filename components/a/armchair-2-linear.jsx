import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zpurlkajd.css';
import '../../css/d/du9plsb0j.css';
import '../../css/y/y38gaub1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zpurlkajd"/><path class="du9plsb0j"/><path class="y38gaub1c"/></g>`,
		"fallback": "solar:armchair-2-linear",
	});
}

export default Component;
