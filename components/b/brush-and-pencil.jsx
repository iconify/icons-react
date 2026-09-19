import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kgb3elbcn.css';
import '../../css/z/zotiacieu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kgb3elbcn"/><path class="zotiacieu"/></g>`,
		"fallback": "si-glyph:brush-and-pencil",
	});
}

export default Component;
