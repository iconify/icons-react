import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ld24yvbps.css';
import '../../css/g/g5h6z7bmk.css';
import '../../css/m/mg2z3q8-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ld24yvbps"/><path class="g5h6z7bmk"/><path class="mg2z3q8-e"/></g>`,
		"fallback": "tabler:chart-arcs-3",
	});
}

export default Component;
