import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/einr_36wa.css';
import '../../css/j/joe83l06m.css';
import '../../css/n/nxfzdyb0n.css';
import '../../css/a/aji3_8bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="einr_36wa"/><path class="joe83l06m"/><path class="nxfzdyb0n"/><path class="aji3_8bki"/></g>`,
		"fallback": "solar:hiking-minimalistic-line-duotone",
	});
}

export default Component;
