import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ae3506h7l.css';
import '../../css/l/lgfkdnbmi.css';
import '../../css/y/yduk_kccx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ae3506h7l"/><path class="lgfkdnbmi"/><path class="yduk_kccx"/></g>`,
		"fallback": "glyphs-poly:gift-card",
	});
}

export default Component;
