import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1c3_hbmh.css';
import '../../css/j/jn_tsyv7z.css';
import '../../css/s/snl4n64vp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f1c3_hbmh"/><path class="jn_tsyv7z"/><path class="snl4n64vp"/></g>`,
		"fallback": "pepicons-print:checkmark-off",
	});
}

export default Component;
