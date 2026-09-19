import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/im79kjb7c.css';
import '../../css/r/rfexgsbti.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="im79kjb7c"/><path class="rfexgsbti"/></g>`,
		"fallback": "si-glyph:contacter",
	});
}

export default Component;
