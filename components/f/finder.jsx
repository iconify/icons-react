import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fruoy0-av.css';
import '../../css/l/lwmc7bbbb.css';
import '../../css/q/qlm0w-bmn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fruoy0-av"/><path class="lwmc7bbbb"/><path class="qlm0w-bmn"/></g>`,
		"fallback": "si-glyph:finder",
	});
}

export default Component;
