import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e7lqm9obr.css';
import '../../css/z/z37i7yg4n.css';
import '../../css/n/n724o7bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e7lqm9obr"/><path clip-rule="evenodd" class="z37i7yg4n"/><path class="n724o7bcp"/></g>`,
		"fallback": "keyline-icons:cable-sharp-duotone",
	});
}

export default Component;
