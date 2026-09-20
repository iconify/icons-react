import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iuegzckki.css';
import '../../css/g/gwtfv0-af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iuegzckki"/><path class="gwtfv0-af"/></g>`,
		"fallback": "solar:download-line-duotone",
	});
}

export default Component;
