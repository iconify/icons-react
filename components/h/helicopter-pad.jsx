import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sx8b5qkom.css';
import '../../css/f/f_fp80b7a.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="sx8b5qkom"/><path class="f_fp80b7a"/></g>`,
		"fallback": "si-glyph:helicopter-pad",
	});
}

export default Component;
