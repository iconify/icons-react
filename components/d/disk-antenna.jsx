import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mdkch5uab.css';
import '../../css/j/j-zew9bdi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mdkch5uab"/><path class="j-zew9bdi"/></g>`,
		"fallback": "si-glyph:disk-antenna",
	});
}

export default Component;
