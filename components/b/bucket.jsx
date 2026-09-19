import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c787b-zxi.css';
import '../../css/b/bxutvf4dz.css';
import '../../css/v/v62_33uqe.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="c787b-zxi"/><path class="bxutvf4dz"/><path class="v62_33uqe"/></g>`,
		"fallback": "si-glyph:bucket",
	});
}

export default Component;
