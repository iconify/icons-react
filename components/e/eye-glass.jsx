import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xh3bk-y4h.css';
import '../../css/s/scep2_r9g.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xh3bk-y4h"/><path class="scep2_r9g"/></g>`,
		"fallback": "si-glyph:eye-glass",
	});
}

export default Component;
