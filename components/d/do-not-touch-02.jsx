import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uo57mhb2e.css';
import '../../css/h/hup9hua1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uo57mhb2e"/><path class="hup9hua1e"/></g>`,
		"fallback": "hugeicons:do-not-touch-02",
	});
}

export default Component;
