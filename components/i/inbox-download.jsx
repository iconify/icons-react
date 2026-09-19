import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mlkrqcdzy.css';
import '../../css/l/lkirl3btc.css';
import '../../css/o/opbqqrbau.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="mlkrqcdzy"/><path class="lkirl3btc"/><path class="opbqqrbau"/></g>`,
		"fallback": "si-glyph:inbox-download",
	});
}

export default Component;
