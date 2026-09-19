import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uhxol8b3c.css';
import '../../css/z/zphts3buk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="uhxol8b3c"/><path class="zphts3buk"/></g>`,
		"fallback": "icon-park:corner-up-right",
	});
}

export default Component;
