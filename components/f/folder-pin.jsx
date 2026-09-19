import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vyhf62b0f.css';
import '../../css/e/e80ot63pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vyhf62b0f"/><path class="e80ot63pk"/></g>`,
		"fallback": "hugeicons:folder-pin",
	});
}

export default Component;
