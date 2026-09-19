import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c4vasl-4f.css';
import '../../css/n/nsfxyjbrg.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c4vasl-4f"/><path class="nsfxyjbrg"/></g>`,
		"fallback": "si-glyph:cran",
	});
}

export default Component;
