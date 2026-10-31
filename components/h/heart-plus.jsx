import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ej-t5rbyo.css';
import '../../css/d/d85c5cb7t.css';
import '../../css/j/jqae8y5hl.css';
import '../../css/i/ie38f9e7r.css';
import '../../css/w/wgpdpne3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ej-t5rbyo wm-shadow"/><path class="d85c5cb7t wm-shadow"/><path class="jqae8y5hl"/><path class="ie38f9e7r"/><path class="wgpdpne3t wm-s"/></g>`,
		"fallback": "withicons-brutal:heart-plus",
	});
}

export default Component;
