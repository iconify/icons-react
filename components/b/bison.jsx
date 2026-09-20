import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-d9swq8e.css';
import '../../css/r/rn51g3b_c.css';
import '../../css/g/g68d347_z.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/c/crg-fgbqv.css';
import '../../css/a/aen4-f9ru.css';
import '../../css/o/o-0hi9c6w.css';
import '../../css/w/wrz2j4b2c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-d9swq8e"/><path class="rn51g3b_c"/><path class="g68d347_z"/><g class="jn8qy4bru"><path class="crg-fgbqv"/><path class="aen4-f9ru"/><path class="o-0hi9c6w"/><path class="wrz2j4b2c"/></g>`,
		"fallback": "openmoji:bison",
	});
}

export default Component;
