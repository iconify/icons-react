import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yajhtab_g.css';
import '../../css/o/osof7mbva.css';
import '../../css/l/lhz5vf86h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yajhtab_g"/><path class="osof7mbva"/><path class="lhz5vf86h"/></g>`,
		"fallback": "tabler:arrows-up-left",
	});
}

export default Component;
