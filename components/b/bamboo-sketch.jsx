import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/ht-mpzbha.css';
import '../../css/i/iqw1xpbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ht-mpzbha"/><path class="iqw1xpbiq"/></g>`,
		"fallback": "withicons:bamboo-sketch",
	});
}

export default Component;
