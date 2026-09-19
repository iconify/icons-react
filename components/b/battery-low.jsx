import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x5vuxjmes.css';
import '../../css/t/tloje9b9b.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x5vuxjmes"/><path class="tloje9b9b"/></g>`,
		"fallback": "si-glyph:battery-low",
	});
}

export default Component;
