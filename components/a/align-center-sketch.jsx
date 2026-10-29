import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iaz8bxbvw.css';
import '../../css/o/ouug8ac1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="iaz8bxbvw"/><path class="ouug8ac1h"/></g>`,
		"fallback": "withicons:align-center-sketch",
	});
}

export default Component;
