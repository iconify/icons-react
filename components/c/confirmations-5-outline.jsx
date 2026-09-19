import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/bgtimob-e.css';
import '../../css/g/gxej23tyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="bgtimob-e"/><path class="gxej23tyb"/></g>`,
		"fallback": "bitcoin-icons:confirmations-5-outline",
	});
}

export default Component;
