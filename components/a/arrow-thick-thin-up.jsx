import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bnnmvmbrc.css';
import '../../css/u/u-cfb250l.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bnnmvmbrc"/><path class="u-cfb250l"/></g>`,
		"fallback": "si-glyph:arrow-thick-thin-up",
	});
}

export default Component;
