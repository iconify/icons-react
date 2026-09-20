import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vbp1coqrq.css';
import '../../css/a/aagsttzff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vbp1coqrq"/><path class="aagsttzff"/></g>`,
		"fallback": "reicon:heart-duotone",
	});
}

export default Component;
