import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lmwtlnb7t.css';
import '../../css/b/bh6py3bao.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lmwtlnb7t"/><path class="bh6py3bao"/></g>`,
		"fallback": "si-glyph:cover-food",
	});
}

export default Component;
