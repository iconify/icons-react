import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0vubxhcb.css';
import '../../css/c/cg-8tnhvv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a0vubxhcb"/><path class="cg-8tnhvv"/></g>`,
		"fallback": "glyphs:flag-1-duo",
	});
}

export default Component;
