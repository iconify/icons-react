import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/izgbtw1nb.css';
import '../../css/j/jj2zkqn1f.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="izgbtw1nb"/><path class="jj2zkqn1f"/></g>`,
		"fallback": "si-glyph:chart-column-decrease",
	});
}

export default Component;
