import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c8uitjomx.css';
import '../../css/z/zl12wg8_m.css';
import '../../css/c/cytfombss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c8uitjomx"/><path class="zl12wg8_m"/><path class="cytfombss"/></g>`,
		"fallback": "tabler:book-clone",
	});
}

export default Component;
