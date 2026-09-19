import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gryh97b_j.css';
import '../../css/a/axb9gc__t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gryh97b_j"/><path clip-rule="evenodd" class="axb9gc__t"/></g>`,
		"fallback": "flowbite:glass-water-droplet-solid",
	});
}

export default Component;
