import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nxega0mee.css';
import '../../css/r/rnm1us33d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nxega0mee"/><path class="rnm1us33d"/></g>`,
		"fallback": "bi:box-arrow-down",
	});
}

export default Component;
