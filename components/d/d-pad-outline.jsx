import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zre2zb_qf.css';
import '../../css/n/nmehigjur.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zre2zb_qf"/><path class="nmehigjur"/></g>`,
		"fallback": "glyphs:d-pad-outline",
	});
}

export default Component;
