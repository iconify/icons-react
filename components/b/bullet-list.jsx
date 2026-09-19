import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8n_0x-qn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8n_0x-qn"/>`,
		"fallback": "si-glyph:bullet-list",
	});
}

export default Component;
