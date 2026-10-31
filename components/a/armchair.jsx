import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j-tav8a0x.css';
import '../../css/w/w1-b9jboe.css';
import '../../css/x/x7r_too4w.css';
import '../../css/k/k4tnp4b9a.css';
import '../../css/l/lz2z9_c7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="j-tav8a0x wm-shadow"/><path class="w1-b9jboe wm-shadow"/><path class="x7r_too4w"/><path class="k4tnp4b9a"/><path class="lz2z9_c7t"/></g>`,
		"fallback": "withicons-brutal:armchair",
	});
}

export default Component;
