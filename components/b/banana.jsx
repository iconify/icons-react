import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d57-jm2nc.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hrriopfdg.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/f/fu5fcwb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGwNo5uPet" class="d57-jm2nc"/></defs><g class="ft5dv1b6b"><path class="hrriopfdg"/><use href="#SVGwNo5uPet"/><g class="p_3zmsvya"><path class="fu5fcwb3h"/><use href="#SVGwNo5uPet"/></g></g>`,
		"fallback": "tdesign:banana",
	});
}

export default Component;
