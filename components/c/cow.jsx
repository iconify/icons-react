import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z1say5j3g.css';
import '../../css/g/go6phgbcw.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="z1say5j3g"/><path class="go6phgbcw"/></g>`,
		"fallback": "si-glyph:cow",
	});
}

export default Component;
