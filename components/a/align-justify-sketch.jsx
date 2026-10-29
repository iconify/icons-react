import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tg3j6l61v.css';
import '../../css/s/sxmblre0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tg3j6l61v"/><path class="sxmblre0y"/></g>`,
		"fallback": "withicons:align-justify-sketch",
	});
}

export default Component;
