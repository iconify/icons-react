import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cmxzfjbjp.css';
import '../../css/b/b3-0hys3j.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cmxzfjbjp"/><path class="b3-0hys3j"/></g>`,
		"fallback": "si-glyph:house",
	});
}

export default Component;
