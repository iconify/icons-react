import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/ju4potboh.css';
import '../../css/w/wd2d0dbnz.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ju4potboh"/><path class="wd2d0dbnz"/></g>`,
		"fallback": "si-glyph:egg",
	});
}

export default Component;
