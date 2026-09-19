import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f64wa0bzh.css';
import '../../css/f/f0a0jwb7h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f64wa0bzh"/><path class="f0a0jwb7h"/></g>`,
		"fallback": "si-glyph:folder-music",
	});
}

export default Component;
