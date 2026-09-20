import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/az74cdzje.css';
import '../../css/s/s8__4ubpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="az74cdzje"/><path class="s8__4ubpr"/></g>`,
		"fallback": "keyline-icons:chart-tree-map-two-tone",
	});
}

export default Component;
