import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vhhww1-oi.css';
import '../../css/m/mc1zpf89q.css';
import '../../css/f/fwgmdib4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="vhhww1-oi"/><rect class="mc1zpf89q"/><path class="fwgmdib4c"/></g>`,
		"fallback": "lucide:align-start-vertical",
	});
}

export default Component;
