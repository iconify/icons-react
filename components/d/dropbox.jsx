import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zn0dbsspf.css';
import '../../css/h/hdkg49b6e.css';
import '../../css/z/znts8wbcy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zn0dbsspf"/><path class="hdkg49b6e"/><path class="znts8wbcy"/></g>`,
		"fallback": "si-glyph:dropbox",
	});
}

export default Component;
