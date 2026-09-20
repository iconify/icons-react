import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zi7qjjbiy.css';
import '../../css/d/d3r2wb0it.css';
import '../../css/k/k4l4-797u.css';
import '../../css/u/ul5rc3bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zi7qjjbiy"/><path class="d3r2wb0it"/><path class="k4l4-797u"/><path class="ul5rc3bsb"/></g>`,
		"fallback": "lets-icons:dna",
	});
}

export default Component;
