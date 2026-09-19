import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/csqmazbuo.css';
import '../../css/o/ogfn4ih6o.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="csqmazbuo"/><path class="ogfn4ih6o"/></g>`,
		"fallback": "si-glyph:inbox-upload",
	});
}

export default Component;
