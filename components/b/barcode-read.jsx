import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/r/rzrfvvu7m.css';
import '../../css/d/dwozr8b1i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="rzrfvvu7m"/><path class="dwozr8b1i"/></g>`,
		"fallback": "glyphs:barcode-read",
	});
}

export default Component;
