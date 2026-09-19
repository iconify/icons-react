import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nrlggcczv.css';
import '../../css/t/tnilf1b0e.css';
import '../../css/j/jspijg-rm.css';
import '../../css/t/tbkfkib0i.css';
import '../../css/i/iad76iwuh.css';
import '../../css/k/kdbukcckk.css';

const viewBox = {"width":82,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nrlggcczv"/><path clip-rule="evenodd" class="tnilf1b0e"/><path class="jspijg-rm"/><rect transform="rotate(-45 20.769 51.639)" class="tbkfkib0i"/><rect transform="rotate(135 18.69 22.25)scale(1 -1)" class="iad76iwuh"/><path class="kdbukcckk"/></g>`,
		"fallback": "glyphs-poly:car-tilt",
	});
}

export default Component;
