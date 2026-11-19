import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dwv2bhbes.css';
import '../../css/f/fcqkq2d4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dwv2bhbes"/><path class="fcqkq2d4n"/></g>`,
		"fallback": "lucide:diagram-sankey",
	});
}

export default Component;
