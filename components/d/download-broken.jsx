import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pt85chb2e.css';
import '../../css/g/gwtfv0-af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pt85chb2e"/><path class="gwtfv0-af"/></g>`,
		"fallback": "solar:download-broken",
	});
}

export default Component;
