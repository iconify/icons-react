import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/k/k1ec6vbbe.css';
import '../../css/m/mr4ysib0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="k1ec6vbbe"/><path class="mr4ysib0c"/></g>`,
		"fallback": "lets-icons:arhive-alt-export",
	});
}

export default Component;
