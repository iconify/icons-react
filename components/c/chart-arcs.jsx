import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ld24yvbps.css';
import '../../css/t/tk5h2pbat.css';
import '../../css/j/j-iw4xtdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ld24yvbps"/><path class="tk5h2pbat"/><path class="j-iw4xtdc"/></g>`,
		"fallback": "tabler:chart-arcs",
	});
}

export default Component;
