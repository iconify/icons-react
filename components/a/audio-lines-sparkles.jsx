import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sgp4ebbou.css';
import '../../css/c/c7kgdbcvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sgp4ebbou"/><path class="c7kgdbcvb"/></g>`,
		"fallback": "keyline-icons:audio-lines-sparkles",
	});
}

export default Component;
