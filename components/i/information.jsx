import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkn1_fb_t.css';
import '../../css/g/gzawnq-ak.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkn1_fb_t"/><path class="gzawnq-ak"/>`,
		"fallback": "iwwa:information",
	});
}

export default Component;
