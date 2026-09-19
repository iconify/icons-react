import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lujfxbcgt.css';
import '../../css/t/tq3f9wbjb.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lujfxbcgt"/><path class="tq3f9wbjb"/></g>`,
		"fallback": "si-glyph:door",
	});
}

export default Component;
