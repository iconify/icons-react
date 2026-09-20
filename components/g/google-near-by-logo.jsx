import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/e7ct-sb-h.css';
import '../../css/s/sy-i5_08x.css';
import '../../css/g/g0im4qb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="e7ct-sb-h"/><path class="sy-i5_08x"/><path class="g0im4qb3w"/></g>`,
		"fallback": "streamline-logos:google-near-by-logo",
	});
}

export default Component;
